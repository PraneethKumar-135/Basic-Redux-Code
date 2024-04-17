import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, UpdatePriceAction } from '../Store/Cartslice';

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const ProductsPrice = useSelector((state) => state.cart.price);
    const dispatch = useDispatch();
    // console.log(products);
    const handleRemove = (productId, productPrice) => {
        dispatch(remove(productId))
        dispatch(UpdatePriceAction(productPrice))
    }
    return (
        <div>
            <h1>Cart</h1>
            <div className='cart'>
                {products.map((product) => (
                    <div>
                        <div className='cartCard'>
                            <img src={product.image} alt='' />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={() => handleRemove(product.id, product.price)} className='btn'>Remove</button>
                        </div>
                    </div>)
                )}
                <div> <h1>Total Amount:{ProductsPrice}</h1></div>
            </div>
        </div >
    );
}

export default Cart;
