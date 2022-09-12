import { Grid, Table } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import FormDialog from "../components/dialog";

export default function Consultant() {
  const [search, setSearch] = useState("");
  const [consultant, setConsultant] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  axios({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
    data: null,
  })
    .then((res) => {
      setConsultant(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
     <FormDialog
        open={open}
        onSubmit={handleSubmit}
        handleClose={handleClose}
      />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-primary">Search</button>
        <grid>
          <button className="btn-createNew" onClick={handleClickOpen}>
            Create New
          </button>
        </grid>
      </form>

      <table className="table">
        <thead>
          <th>Stt</th>
          <th>Họ và tên</th>
          <th>Email</th>
          <th>Địa Chỉ</th>
          <th>Số điện thoại</th>
          <th>Trạng Thái</th>
          <th></th>
          <th></th>
        </thead>

        {consultant &&
          consultant.map((item, index) => {
            return (
              <tbody key={index}>
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.status}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Edit
                  </button>
                </td>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
