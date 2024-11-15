import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { fetchOneMenuData } from '../utils/data'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(()=>{

        fetchOneMenuData(4)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))


    },[])

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
