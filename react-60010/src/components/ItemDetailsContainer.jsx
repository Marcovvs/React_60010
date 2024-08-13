import data from "../../data/data.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/esm/Container";

export const ItemDetailsContainer = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    
useEffect (()=> {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000)).then((response) => {
        const finded = response.find((artc) => artc.id === Number(id));
        setProducto(finded);
    }).finally(()=> setLoading(false));
}, [id]);

if(loading) return "Loading...";

    return (
        <Container className="mt-4">
            <h1 className="fw-bold">{producto.category}</h1>
            <h2 className="text-end">{producto.nombre}</h2>
            <img src={producto.img}/>
            <b className="me-2">{producto.flavor}</b>
            <b className="bg-success">${producto.precio}</b>
            <h3 className="text-center">{producto.descripcion}</h3>
        </Container>
    );
}