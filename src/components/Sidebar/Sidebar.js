import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

import {
  AttachMoneyOutlined,
  BarChartOutlined,
  ChatBubbleOutline,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
  HomeOutlined,
} from "@material-ui/icons";
export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link className="side-link" to="/">
              <li
                className={
                  splitLocation[1] === ""
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <HomeOutlined className="sidebar-icon" />
                Home
              </li>
            </Link>
            <Link className="side-link" to="/analytics">
              <li
                className={
                  splitLocation[1] === "analytics"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <Timeline className="sidebar-icon" />
                Analytics
              </li>
            </Link>
            <Link className="side-link" to="/sales">
              <li
                className={
                  splitLocation[1] === "sales"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <TrendingUp className="sidebar-icon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        {/*
         */}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link className="side-link" to="/users">
              <li
                className={
                  splitLocation[1] === "users"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link className="side-link" to="/productlist">
              <li
                className={
                  splitLocation[1] === "productlist"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <Storefront className="sidebar-icon" />
                Products
              </li>
            </Link>
            <Link className="side-link" to="/financial_report">
              <li
                className={
                  splitLocation[1] === "financial_report"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <BarChartOutlined className="sidebar-icon" />
                Reports
              </li>
            </Link>
            <Link className="side-link" to="/Transications">
              <li
                className={
                  splitLocation[1] === "Transications"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <AttachMoneyOutlined className="sidebar-icon" />
                Transications
              </li>
            </Link>
          </ul>
        </div>
        {/*
         */}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <Link className="side-link" to="/mail">
              <li
                className={
                  splitLocation[1] === "mail"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <MailOutline className="sidebar-icon" />
                Mail
              </li>
            </Link>
            <Link className="side-link" to="/messages">
              <li
                className={
                  splitLocation[1] === "messages"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <ChatBubbleOutline className="sidebar-icon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        {/*
         */}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <Link className="side-link" to="/manage">
              <li
                className={
                  splitLocation[1] === "manage"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <WorkOutline className="sidebar-icon" />
                Manage
              </li>
            </Link>
            <Link className="side-link" to="/reports">
              <li
                className={
                  splitLocation[1] === "reports"
                    ? "sidebar-items active"
                    : "sidebar-items"
                }
              >
                <Report className="sidebar-icon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
