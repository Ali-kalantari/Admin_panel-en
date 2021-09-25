import "./userlist.css";

import { userdata_rows } from "./../../data";

import { useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

const UserList = () => {
  const [data, setdata] = useState(userdata_rows);

  const Deleteuser = (id) => {
    setdata(data.filter((i) => i.id !== id));
  };

  const userdata_columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "Username",
      width: 190,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img src={params.row.avatar} alt="whatever" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 130,
      sortable: true,
      editable: false,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      sortable: false,
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      sortable:false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => Deleteuser(params.row.id)}
              className="user-list-icon"
            />
          </>
        );
      },
      width: 190,
    },
  ];
  return (
    <div className="user-list">
      <DataGrid
        rows={data}
        columns={userdata_columns}
        pageSize={data.length}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
