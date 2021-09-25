import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';

const Country = () => {
    const [celebrities, setcelebrities] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setcelebrities(data))
    }, [])
    return (
        <div>
            <h1>Bigg Boss 15 Contestants
                list
            </h1>
            <h2>Bugget: 200million</h2>
            {
                celebrities.map(celebritie => <Cart celebritie={celebritie}></Cart>)
            }

        </div>
    );
};

export default Country;