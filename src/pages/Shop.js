import { Table } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [shop, setShop] = useState("");
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  axios({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
    data: null,
  })
    .then((res) => {
      setShop(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });



    

  return (
    <div className="btn-search">
      <form className="input-box-se" onSubmit={handleSubmit}>
        <input type=" text" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn-primary">Search</button>
        <button className="btn-createNew" color="primary" onClick={handleClickOpen}>Create New</button>
      </form>

      <table className="table">
        <thead>
          <th>Stt</th>
          <th>Tên sản phẩm</th>
          <th>Mã sản phẩm</th>
          <th>hình ảnh</th>
          <th>số lượng</th>
          <th>Danh mục</th>
        </thead>

        {shop &&
          shop.map((item, index) => {
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
