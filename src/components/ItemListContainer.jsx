import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import { fetchMenuData } from "../utils/data";
import ItemList from "./ItemList";



const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const onAdd = (cantidad) => {
        alert(`Agregaste al carrito ${cantidad} de productos`)
    }

    
    useEffect(()=>{
        setLoading(true)
        fetchMenuData()
        .then((res)=> setProducts(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[])


    return (
        <>
            <h1>{props.greeting}</h1>
            
            {loading ? (
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only"></span>
                </div>
            ) : <ItemList products={products}/>}
        </>
    );
    
}
export default ItemListContainer;