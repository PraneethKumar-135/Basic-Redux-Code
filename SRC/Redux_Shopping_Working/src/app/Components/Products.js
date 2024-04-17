"use client"
import React, { useEffect, useState } from 'react';
import './styles.css'
import { add } from '../Store/Cartslice';
import { useDispatch } from 'react-redux';


const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  const handleAdd = (filter) => {
    dispatch(add(filter))
  }


  return (
    <div className='productsWrapper'>
      {products.map((filter) =>
        <div className='card' key={filter.id}>
          <img src={filter.image} className='w-1/2 h-1/2' />
          {/* <h1></h1> */}
          <h4>{filter.title}</h4>
          <h5>INR:{filter.price}</h5>
          <button onClick={() => handleAdd(filter)} className='btn'>Add To Cart</button>
        </div>
      )}
    </div>
  );
}

export default Products;
