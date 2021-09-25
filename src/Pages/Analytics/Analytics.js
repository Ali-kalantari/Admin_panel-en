import React from "react";
import "./Analytics.css";
import { pricedata, productdata } from "./../../data";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  return (
    <div className="Analytics">
      <div className="Analytics-item">
        <h3>Analytics By Sales</h3>
        <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
          <LineChart data={pricedata}>
            <XAxis dataKey="name" stroke="blue" />
            <Line type="monotone" dataKey="price" stroke="purple" />
            <Tooltip />
            <CartesianGrid stroke="darkgray" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/*  */}
      <div className="Analytics-item">
        <h3>Analytics By Price</h3>
        <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
          <LineChart data={productdata}>
            <XAxis dataKey="name" stroke="blue" />
            <Line type="monotone" dataKey="sales" stroke="orange" />
            <Tooltip />
            <CartesianGrid stroke="darkgray" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="Analytics-item">
        <h3>Analytics By Changes</h3>
        <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
          <LineChart data={pricedata}>
            <XAxis dataKey="name" stroke="blue" />
            <Line type="monotone" dataKey="changes" stroke="red" />
            <Tooltip />
            <CartesianGrid stroke="darkgray" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="Analytics-item">
        <h3>Compare Lowest price with Changes</h3>
        <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
          <LineChart data={pricedata}>
            <XAxis dataKey="changes" stroke="blue" />
            <Line type="monotone" dataKey="lowest" stroke="green" />
            <Tooltip />
            <CartesianGrid stroke="darkgray" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
