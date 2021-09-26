import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.celebrit)
    const { name, img, salary, Age, Role } = props.celebritie

    return (
        <div className="color">
            <h2><img className="img" src={img} alt="" /></h2>
            <h2>Name: {name}</h2>
            <h2>Age: {Age}</h2>
            <h2>Role:{Role}</h2>
            <h2>Salary:{salary}</h2>
        </div>
    );
};

export default Product;