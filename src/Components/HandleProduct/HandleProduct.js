import React from 'react';
const HandleProduct = () => {
          const handleAddProduct =() => {
    const data ={};
  fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

  })
   }
   document.title = 'admin'

    return (
        <div>
       <button onClick={handleAddProduct}>Add product</button>
        </div>
    );
};

export default HandleProduct;