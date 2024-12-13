import  { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
//import { fetchOneMenuData } from '../utils/data'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import Loader from './Loader'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
      setLoading(true)
      const collectionProd = collection(db, "products")

      const docRef = doc(collectionProd, id)

      getDoc(docRef)
      .then((res) => setProducto({id: res.id, ...res.data()}))
      .catch((error)=> console.log(error))
      .finally(() => setLoading(false))

    },[])

    // useEffect(()=>{

    //     fetchOneMenuData(id)
    //     .then((res)=> setProducto(res))
    //     .catch((error)=> console.log(error))


    // },[])

  return (
    <div style={{ backgroundColor: '#000' }}>
      {loading ? <Loader/> : <ItemDetail producto={producto}/> }
    </div>
  )
}

export default ItemDetailContainer
