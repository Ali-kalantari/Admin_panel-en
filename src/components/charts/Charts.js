import React, { useState, useEffect } from "react";
import "./Charts.css";
import {pricedata} from './../../data'
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(pricedata);
  }, []);

  return (
    <div className="chart">
      <h3 className="chart-title">Sales Analytics</h3>
      <ResponsiveContainer width="100%" height="100%" acpect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="blue" />
          <Line type="monotone" dataKey="price" stroke="blue" />
          <Tooltip />
          <CartesianGrid stroke="darkgray" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
