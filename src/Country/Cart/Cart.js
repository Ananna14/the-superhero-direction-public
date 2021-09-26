import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Product from '../../Product/Product';
import Container from '../Container/Container';




import './Cart.css'

const Cart = () => {
    const [celebrities, setcelebrities] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setcelebrities(data))
    }, [])

    const handelToCart = (celebritie) => {
        const newCart = [...cart, celebritie]
        setCart(newCart)
        console.log(newCart)

    }

    return (
        <div className="half-width">
            <div className="container">
                <h1>product:{celebrities.length}</h1>
                <div className="single-container">
                    {
                        celebrities.map(celebritie => <Product
                            key={celebritie.name}
                            celebritie={celebritie}
                            handelToCart={handelToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="product">
                <Container cart={cart}></Container>

            </div>








        </div >
    );
};

export default Cart;