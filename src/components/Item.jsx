import React from 'react'

const Item = ({product}) => {
  return (
    <>
    
            <div className="col-md-6 col-lg-4 mb-3" key={product.id}>
                <div className="card" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={product.image} className="card-img" alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{ position: 'relative' }}>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                                <p className="card-price" >
                                    Precio: ${product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


</>
  )
}

export default Item
