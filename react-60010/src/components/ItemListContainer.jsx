import data from "../../data/data.json"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve, reject) => 
        setTimeout(()=> resolve(data), 2000))
        .then ((response) => {
            if(!id) {
                setProductos(response);
            }else {
                const filtered = response.filter(artc => artc.category === id);
                setProductos(filtered);
            }   
        })
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }, [id]);

    if(loading) return "Loading...";

    return (
    <Container className="d-flex flex-wrap">{productos.map(artc => 
        <Card key={artc.id} style={{width: "18rem", paddding: "1rem"}} className="m-3 mt-5">
        <Card.Img variant="top" src={artc.img}/>
            <Card.Body>
                <Card.Title>
                    {artc.nombre}
                </Card.Title>
                <Card.Text>
                {artc.descripcion}
                </Card.Text>
                <Card.Text>
                Flavor: {artc.flavor}
                </Card.Text>
                <Link to={`/item/${artc.id}`}><Button variant="success">Conseguilo a ${artc.precio}</Button></Link>
            </Card.Body>
        </Card>)}
    </Container>
    );
}


    
