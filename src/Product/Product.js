import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.celebrite)
    const { name, img, salary, Age, country, Role } = props.celebritie
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="color">
            <h2><img className="img" src={img} alt="" /></h2>
            <h2>Name: {name}</h2>
            <h2>Age: {Age}</h2>
            <h2>Role:{Role}</h2>
            <h2>Country:{country}</h2>
            <h2>Salary:{salary}</h2>
            <button onClick={() => props.handelToCart(props.celebrite)} className="regular-btn">{element}add to card</button>
        </div>

    );
};

export default Product;