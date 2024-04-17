import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/Cartslice';

const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(products);
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div>
            <h1>Cart</h1>
            <div className='cart'>
                {products.map((product) =>
                    <div className='cartCard'>
                        <img src={product.image} alt='' />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
