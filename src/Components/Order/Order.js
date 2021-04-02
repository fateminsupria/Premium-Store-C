import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {

    const { id } = useParams();
    const [item, setItem] = useState(0);


    useEffect(() => {
        console.log("Into order");
        axios.get(`http://localhost:5000/${id}`)
            .then(response => setItem(response.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
           <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                <h1>1</h1>
            <h1>Total:  {item.price}</h1>
            <h1>{item.time}</h1>
        </div>
    );
};

export default Order;