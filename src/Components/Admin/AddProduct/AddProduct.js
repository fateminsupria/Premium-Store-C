import React from 'react';
import SideBar from '../SideBar/SideBar';
// import Data from './Components/Home/Data/Data';
import './AddProduct.css'
const AddProduct = () => {
//    const handleAddProduct =() => {
//     const data ={};
//   fetch('http://localhost:5000/addProduct', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)

//   })
//    }
//    document.title = 'admin'
    return (
        
        <div className="addProduct">
         <div className="container-fluid">
         <div className="row">
                <div className="col-md-3">
                    <SideBar/>
                </div>
              <div className="col-md-9">
                    <div className="pt-4">
                    <h4>Add Product</h4>
                    </div>
                  <div className="backgroundColor">
                  <div className="addProduct-from">
                    <form >
                    <div className="form-group pt-5">
                        <label htmlFor="exampleInputText">Service Title</label>
                        <input  type="text" className="form-control" name="title" placeholder="Product Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Service Title</label>
                        <input  type="number" className="form-control" name="price" placeholder="Add Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Service Title</label>
                        <input  type="text" className="form-control" name="wight" placeholder="Wight" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Upload a image</label>
                        <input  type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-success" >Submit</button>
                </form>
                    </div>
                  </div>
                </div>
              </div>
         </div>
        </div>
    );
};

export default AddProduct;