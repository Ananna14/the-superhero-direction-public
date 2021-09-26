import React from 'react';

const Container = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const celebritie of cart) {
        total = total + celebritie.salary;
    }

    return (
        <div>
            <h2>Total celebritie:{props.cart.length}</h2>
            <h2> Total Salary:{total}</h2>

        </div>
    );
};

export default Container;