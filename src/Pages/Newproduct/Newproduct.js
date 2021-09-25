import React from "react";
import "./newpro.css";

export default function Newproduct() {
  return (
    <div className="new-pro">
      <h1>New Product</h1>
      <form>
        <div className="new-user-item">
          <label>Product Name :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Full Product Name :</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Serial Number:</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Price:</label>
          <input type="text" required />
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>in stock :</label>
          <select name="in stock" id="in_stock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/*  */}
        <div className="new-user-item">
          <label>Status :</label>
          <select name="status" id="status">
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        {/*  */}
        <div className="new-user-item">
            <label>Product Image :</label>
            <br/>
            <input id='_upload' type='file' />
        </div>
        <button className="submit-user" id="create-btn">Create</button>
      </form>
    </div>
  );
}
