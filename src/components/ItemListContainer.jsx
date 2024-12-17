import  {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../service/firebase";
import Loader from "./Loader";
import { message } from "antd";



const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId)) 
        : collection(db, "products") 


        getDocs(productsCollection)
        .then((res) => {
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> message.error(error))
        .finally(()=> setLoading(false))
        

    },[categoryId])

    return (
        <>
            {loading ? (
               <Loader />
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
    
    
}
export default ItemListContainer;
