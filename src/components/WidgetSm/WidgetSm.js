import React, { useState } from "react";
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  const [data] = useState([{ id: 301 }, { id: 305 }, { id: 302 }, { id: 303 }]);
  return (
    <div className="Widget-sm">
      <span className="Widget-sm-title">New Join Members</span>
      <ul className="Widget-sm-list">
        {data.map((i) => {
          return (
            <li className="Widget-sm-item">
              <img
                className="Widget-sm-img"
                src={`https://i.pravatar.cc/${i.id}`}
                alt="avatarimage"
              />
              <div className="Widget-sm-user">
                <span className="Widget-sm-username">benedict lovely</span>
                <span className="Widget-sm-usertitle">Trader</span>
              </div>
              <button className="Widgete-sm-button">
                <Visibility className='widgete-sm-icon' />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
