"use client"
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <h1 className='font-extrabold text-5xl'>Product Dashboard</h1>
            {products.map((product) =>
                <Card key={product.id} className='flex flex-col items-center justify-center p-5 w-1/2'>
                    <Card.Img variant="top" src={product.image} className='w-1/6 h-1/6' />
                    <Card.Body>
                        <Card.Title className='text-sm text-center'>{product.title}</Card.Title>
                        <Card.Text className='text-sm text-center font-semibold text-blue-500 p-3'>
                            INR :{product.price}
                        </Card.Text>
                        <Button variant="primary" className='bg-blue-500 rounded-sm p-2'>Add To Cart</Button>
                    </Card.Body>
                </Card>
            )}

        </>
    );
};

export default Product;
