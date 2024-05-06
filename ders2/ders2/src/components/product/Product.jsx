import "./product.css";


import React from 'react'


const Product = ({title, category,description,price,photoUrl}) => {
  return (
    <div className="product">

      <img src={photoUrl} alt={photoUrl} />
      <h3>{title}</h3>
      <h2>{category}</h2>
      <p>{description}</p>
      <h5>{price}</h5>
      

    </div>
  )
}

export default Product