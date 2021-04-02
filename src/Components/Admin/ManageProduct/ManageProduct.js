import React from 'react';
import SideBar from '../SideBar/SideBar';

const ManageProduct = () => {
    return (
        <div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3">
                       <SideBar/>
                   </div>
                   <div className="col-md-9">
                       <h4 className="mt-4">Manage Product</h4>
                       <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Wight</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1Kg</td>
      <td>2kg</td>
      <td>3Kg</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>$</td>
      <td>$</td>
      <td>$</td>
    </tr>
  </tbody>
</table>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default ManageProduct;