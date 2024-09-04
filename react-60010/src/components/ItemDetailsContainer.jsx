import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import { ItemsContext } from "../context/ItemsContext";

export const ItemDetailsContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemsContext);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setProducto({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    addItem({ ...producto, quantity });
  };

  if (loading) return "Loading...";

  return <ItemDetails producto={producto} onAdd={onAdd} />;
};
