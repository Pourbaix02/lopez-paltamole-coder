import  { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import Loader from './Loader'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
      setLoading(true)
      const collectionProd = collection(db, "products")

      const docRef = doc(collectionProd, id)

      getDoc(docRef)
      .then((res) => setProduct({id: res.id, ...res.data()}))
      .catch((error)=> console.log(error))
      .finally(() => setLoading(false))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div style={{ backgroundColor: '#000' }}>
      {loading ? <Loader/> : <ItemDetail product={product}/> }
    </div>
  )
}

export default ItemDetailContainer
