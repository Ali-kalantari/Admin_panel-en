import React from "react";
import "./WidgetLg.css";
import Button from "./../utilities/Button";

export default function WidgetLg() {
  const data = [
    { id: 259, btn_name: "Approved" },
    { id: 269, btn_name: "Declined" },
    { id: 279, btn_name: "Pending" },
    { id: 289, btn_name: "Approved" },
  ];
  return (
    <div className="Widget-lg">
      <h3 className="Widget-lg-title">Lastest Transactions</h3>
      <table className="Widget-lg-table">
        <tr className="Widget-lg-tr">
          <th className="Widget-lg-th customer">Customer</th>
          <th className="Widget-lg-th">Date</th>
          <th className="Widget-lg-th">Amount</th>
          <th className="Widget-lg-th">Status</th>
        </tr>
        {data.map((i) => {
          return (
            <tr className="Widget-lg-tr">
              <td className="Widget-lg-user">
                <img
                  className="Widget-lg-img"
                  src={`https://i.pravatar.cc/${i.id}`}
                  alt="user"
                />
                <span className="Widget-lg-name">Elizabeth Rynols</span>
              </td>
              <td className="Widget-lg-date">2 Aug 2023</td>
              <td className="Widget-lg-amount">$203.6 </td>
              <td className="Widget-lg-status">
                <Button name={i.btn_name} />{" "}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
