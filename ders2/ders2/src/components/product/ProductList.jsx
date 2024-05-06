import './product.css';



import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const getProduct = () => {
      fetch("https://fakestoreapi.com/products").then(response => response.json()).then(data => setProduct(data));
    }
    getProduct();
  }, [])

  

  return (
    <div className='productList'>
      {
        product.map((item, id) => {

          return <Product
            key={id}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price + " $"}
            photoUrl={item.image} />

        })
      }

    </div>
  )
}

export default ProductList