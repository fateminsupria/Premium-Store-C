import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router';
// import Data from '../Home/Data/Data';
import Header from '././CheckOut';

const CheckOut = () => {
  let { id } = useParams();
  const [checkOutProduct,setCheckOutProduct]=useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
    .then(res => res.json())
    .then(data => {
      setCheckOutProduct(data)
    })
  },[id])

    return (
        <div className="check-out">
            <Header/>
            <div className="container mt-5">
                <h4>CheckOut</h4>
                <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{checkOutProduct.name}</td>
      <td>1</td>
      <td>$ {checkOutProduct.price}</td>
    </tr>
  </tbody>
</table>
<div className="d-flex justify-content-end">
<button style={{backgroundColor:"#71BA58"}} className="btn text-white">CheckOut</button>
</div>
            </div>
          
        </div>
    );
};

export default CheckOut;