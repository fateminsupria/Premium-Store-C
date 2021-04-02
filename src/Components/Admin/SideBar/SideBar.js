import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const SideBar = () => {
    return (
        <div className="sidebar">
           <div className="container">
              <Link to="/">
              <img className="logo" src="../../images/shopnow.png" alt=""/>
              </Link>
           <Link to="/manageProduct"> 
           <div className="text-white d-flex manageProduct">
                <BsFillGridFill className="text-white"/>
                <h6 className="pl-2"> Manage Product</h6>
            </div>
           </Link>
         <Link to="/addProduct">
         <div className="text-white d-flex manageProduct">
                <AiOutlinePlus className="text-white"/>
                <h6 className="pl-2">Add Product</h6>
            </div>
         </Link>
           </div>
        </div>
    );
};

export default SideBar;