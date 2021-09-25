import React from "react";
import "./productlist.css";
import { productdata_rows } from "./../../data";

import { useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

export default function Productlist() {
    const [data,setdata]=useState(productdata_rows);
    const Deleteuser = (id) => {
        setdata(data.filter((i) => i.id !== id));
      };

    const userdata_columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
          field: "products",
          headerName: "Product",
          width: 190,
          editable: true,
          renderCell: (params) => {
            return (
              <div className="product-list-table">
                <img src={params.row.image} alt="whatever" />
                {params.row.name}
              </div>
            );
          },
        },
        
        {
          field: "status",
          headerName: "Status",
          width: 130,
          editable: true,
        },
        {
          field: "price",
          headerName: "Price",
          sortable: true,
          width: 190,
        },
        {
          field: "action",
          headerName: "Action",
          renderCell: (params) => {
            return (
              <>
                <Link to={`/productlist/${params.row.id}`}>
                  <button className="product-list-edit">Edit</button>
                </Link>
                <DeleteOutline
                  onClick={() => Deleteuser(params.row.id)}
                  className="product-list-icon"
                />
              </>
            );
          },
          width: 190,
        },
      ];
  return (
    <div className="product-list">
      <DataGrid
        rows={data}
        columns={userdata_columns}
        pageSize={data.length}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
