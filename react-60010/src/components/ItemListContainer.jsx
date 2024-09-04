import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ref = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(ref)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Loading...";

  return <ItemList productos={productos} />;
};
