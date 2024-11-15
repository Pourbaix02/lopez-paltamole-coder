import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
        <div className="d-flex justify-content-around align-items-center flex-wrap">
            {products.map((product) => <Item key={product.id} product={product}/>
            )}
        </div>
</>
  )
}

export default ItemList

//me falta el tema del ID y la actividad 3