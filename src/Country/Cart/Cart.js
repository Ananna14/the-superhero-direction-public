import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Product from '../../Product/Product';

import './Cart.css'

const Cart = () => {
    const [celebrities, setcelebrities] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setcelebrities(data))
    }, [])


    return (
        <div className="half-width">
            <div className="container">
                <h1>product:{celebrities.length}</h1>
                {/* <h1>length:{celebrities.length}</h1>
                <h2><img className="img" src={img} alt="" /></h2>
                <h2>Name: {name}</h2>
                <h2>Age: {Age}</h2>
                <h2>Role:{Role}</h2>
                <h2>Salary:{salary}</h2> */}
                {/* <button onClick={() => props.handelToCart(props.celebritie)} >add to cart</button> */}
                <div className="single-container">
                    {
                        celebrities.map(celebritie => <Product celebritie={celebritie}></Product>)
                    }
                </div>
            </div>
            <div className="product">
                <h2>total:</h2>
                <h2>avg:</h2>
            </div>








        </div >
    );
};

export default Cart;