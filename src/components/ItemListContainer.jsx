import  {useState, useEffect} from "react";
//import { fetchMenuData } from "../utils/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../service/firebase";
import Loader from "./Loader";



const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()
    
    //Firebase
    useEffect(() => {
        setLoading(true)
        //conectar con la coleeción

        const productsCollection = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId)) 
        : collection(db, "products") 

        // pedir los objectos

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
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        

    },[categoryId])


    // useEffect(()=>{


    //     setLoading(true)
    //     fetchMenuData()
    //     .then((res)=> {
    //         if(categoryId) {
    //         setProducts(res.filter((product) => product.category === categoryId))
    //         } else {
    //         setProducts(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))

    // },[categoryId])


    return (
        <>
          
          
            <h1 
                className="d-flex justify-content-center align-items-center my-0" 
                style={{ height: '100px', backgroundColor: '#000', color: '#fff'}}
            >
                {props.greeting}
            </h1>
            

            {loading ? (
               <Loader />
            ) : (
                <ItemList products={products} />
            )}
        </>
    );
    
    
}
export default ItemListContainer;

// itemlist agregar un div con d-flex justify context space between