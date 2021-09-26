// import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import Cart from './Cart/Cart';

const Country = () => {
    // const [celebrities, setcelebrities] = useState([]);

    // const [cart, setCart] = useState([]);



    // useEffect(() => {
    //     fetch('./data.json')
    //         .then(res => res.json())
    //         .then(data => setcelebrities(data))
    // }, [])

    // const handelToCart = (celebritie) => {
    //     const newCart = [...cart, celebritie]
    //     setCart(newCart);
    // }
    return (
        <div>
            <h1>Bigg Boss 15 Contestants
                list
            </h1>
            <h2>Bugget: 200million</h2>
            <div className="single-container">
                {/* {
                    celebrities.map(celebritie => <Cart
                        key={celebritie.name}
                        celebritie={celebritie}></Cart>)
                    // handelToCart={handelToCart}
                } */}
            </div>
            {/* <div className="cart-container">
                <Product cart={cart}></Product>
            </div> */}

        </div>
    );
};

export default Country;