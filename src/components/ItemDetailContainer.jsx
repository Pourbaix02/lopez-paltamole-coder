import  { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
//import { fetchOneMenuData } from '../utils/data'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {id} = useParams()


    useEffect(() => {

      const collectionProd = collection(db, "products")

      const docRef = doc(collectionProd, id)

      getDoc(docRef)
      .then((res) => setProducto({id: res.id, ...res.data()}))
      .catch((error)=> console.log(error))

    },[])

    // useEffect(()=>{

    //     fetchOneMenuData(id)
    //     .then((res)=> setProducto(res))
    //     .catch((error)=> console.log(error))


    // },[])

  return (
    <div style={{ backgroundColor: '#000' }}>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
