import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.celebritie)
    const { name, img, salary, Age, Role } = props.celebritie
    return (
        <div className="container">
            <div>
                <h2><img src={img} alt="" /></h2>
                <h2>Name: {name}</h2>
                <h2>Age: {Age}</h2>
                <h2>Role:{Role}</h2>
                <h2>Salary:{salary}</h2>
            </div>

            <div>
                <h2>Total Cost:</h2>
                <h2>Celebritie Added:</h2>
            </div>
        </div>
    );
};

export default Cart;