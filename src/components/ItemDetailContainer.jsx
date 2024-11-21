import  { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { fetchOneMenuData } from '../utils/data'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(()=>{

        fetchOneMenuData(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))


    },[])

  return (
    <div style={{ backgroundColor: '#000' }}>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
