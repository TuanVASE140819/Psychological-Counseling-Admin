import { Grid, Table } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import FormDialog from "../components/dialog";

export default function Consultant() {
  const [search, setSearch] = useState("");
  const [consultant, setConsultant] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
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

  const onChange = (e) => {
    const { id, value } = e.target;
    // console.log(id, value);
    setFormData({ ...formData, [id]: value });
  };

  const url = `http://localhost:4000/users`
  const handleFromSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  };

  

  axios({
    method: "GET",
    url: "https://reqres.in/api/users?page=1",
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
        data={formData}
        onChange={onChange}
        handleFromSubmit={handleSubmit}
      />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn-primary">Search</button>

        <grid>
          <button className="btn-createNew" onClick={handleClickOpen}>
            Create New
          </button>
        </grid>
      </form>

      <table className="table">
        <thead>
          <th>Stt</th>
          <th>Tên sản phẩm</th>
          <th>Mã sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Số lượng</th>
          <th>Danh mục</th>
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
