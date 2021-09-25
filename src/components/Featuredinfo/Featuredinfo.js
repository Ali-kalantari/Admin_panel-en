import React from "react";
import "./Featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featured-items">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$3,521</span>
          <span className="featured-money-rate">
            -19.8 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare To Last Mounth</span>
      </div>
      {/*
       */}
      <div className="featured-items">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$5,637</span>
          <span className="featured-money-rate">
            -9.6 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compare To Last Mounth</span>
      </div>
      {/* 
       */}
      <div className="featured-items">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$7,122</span>
          <span className="featured-money-rate">
            +1.2 <ArrowUpward className="featured-icon positive" />
          </span>
        </div>
        <span className="featured-sub">Compare To Last Mounth</span>
      </div>
    </div>
  );
}
