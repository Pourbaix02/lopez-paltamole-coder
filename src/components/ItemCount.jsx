import { useEffect } from 'react'
import { useState } from 'react'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)
    const [hasStock, setHasStock] = useState(stock > 0)
    
    useEffect( () => {
        if (stock > 0) {
        setHasStock(true)}

    },[stock]);

    const sumar = () => {
        if (count < stock) {
        setCount(count + 1) }
    }
    const restar = () => {
        if (count > 0) {
        setCount(count - 1) }
    }

    const onAddHandler = () => {
        if (hasStock) {
            onAdd(count)
        }
    }

    const isDisabled = !hasStock || count === 0;

  return (
    <>
    <div>
      <button className='btn btn-danger' onClick={restar}>-</button>
      <span>{count}</span>
      <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-success' onClick={onAddHandler} disabled={isDisabled}>
        Comprar
    </button>
    </>
  )
}

export default ItemCount
