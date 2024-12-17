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
        <div className="d-flex flex-column align-items-center gap-3">
    
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-danger px-3" onClick={restar}>
              -
            </button>
            <span 
              className="border px-4 py-2 rounded text-center"
              style={{ minWidth: "50px" }}
            >
              {count}
            </span>
            <button className="btn btn-success px-3" onClick={sumar}>
              +
            </button>
          </div>
      
          <button 
            className="btn btn-primary px-4 py-2"
            onClick={onAddHandler} 
            disabled={isDisabled}
          >
            Agregar al carrito
          </button>
        </div>
      );
      
}

export default ItemCount
