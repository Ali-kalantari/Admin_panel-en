import React from "react";
import { productdata } from "./../../data";
import { Link } from "react-router-dom";
import "./product.css";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Publish } from "@material-ui/icons";

export default function Singleproduct() {
  return (
    <div className="single-product">
      <div className="single-product-title-container">
        <h1>Produt</h1>
        <Link to="/new_product">
          <button>Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <h3 className="chart-title">Sales Performance</h3>
          <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
            <LineChart data={productdata}>
              <XAxis dataKey="name" stroke="blue" />
              <Line type="monotone" dataKey="sales" stroke="blue" />
              <Tooltip />
              <CartesianGrid stroke="darkgray" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://cdn.mos.cms.futurecdn.net/rZdpHpsbPHmevFX5QXQuAV-1200-80.jpg"
              alt="f"
            />
            <span className="product-name">Xbox One S</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">103</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales:</span>
              <span className="product-info-value">599</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Inventory:</span>
              <span className="product-info-value">79</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form>
          <div className="product-form-left">
            <label>Product Name</label>
            <input placeholder="Xbox One S" />
            <label>in stock</label>
            <select name="instock" id="instock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label>status</label>

            <select name="status" id="status">
              <option value="available">available</option>
              <option value="unavailable">unavailable</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
                <img src="https://cdn.mos.cms.futurecdn.net/rZdpHpsbPHmevFX5QXQuAV-1200-80.jpg" alt='xbox'/>
                <label for='file'><Publish id='pro-icon'/></label>
                <input id='file' type='file' style={{display:'none'}}/>
            </div>
            <button id='pro-btn'>
                Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
