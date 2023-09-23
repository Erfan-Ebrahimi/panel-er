import React from 'react';
import "./newProduct.scss"

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="123 $" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
    </div>
  )
}

export default NewProduct;