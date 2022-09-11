import { Table } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Consultant() {
  const { arrTable } = useSelector((rootReducer) => rootReducer.QuanLyReducer);

  const [search, setSearch] = useState("");
  const [consultant, setConsultant] = useState("");
  // const columns = [
  //   {
  //     title: 'STT',
  //     dataIndex: 'key',
  //     // defaultSortOrder: 'descend',
  //     // sorter: (a, b) => a.age - b.age,
  //   }, ,
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     filters: [
  //       {
  //         text: 'Joe',
  //         value: 'Joe',
  //       },
  //       {
  //         text: 'Jim',
  //         value: 'Jim',
  //       },
  //       {
  //         text: 'Submenu',
  //         value: 'Submenu',
  //         children: [
  //           {
  //             text: 'Green',
  //             value: 'Green',
  //           },
  //           {
  //             text: 'Black',
  //             value: 'Black',
  //           },
  //         ],
  //       },
  //     ],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  //     onFilter: (value, record) => record.name.indexOf(value) === 0,
  //     sorter: (a, b) => a.name.length - b.name.length,
  //     sortDirections: ['descend'],
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     defaultSortOrder: 'descend',
  //     sorter: (a, b) => a.age - b.age,
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //     filters: [
  //       {
  //         text: 'London',
  //         value: 'London',
  //       },
  //       {
  //         text: 'New York',
  //         value: 'New York',
  //       },
  //     ],
  //     onFilter: (value, record) => record.address.indexOf(value) === 0,
  //   },
  // ];
  const data = arrTable;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(search);

  axios({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
    data: null,
  })
    .then((res) => {
      console.log(res.data.data);
      setConsultant(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-primary">Search</button>
      </form>
      {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}

      <table className="table">
        <thead>
          <th>Stt</th>
          <th>Họ và tên</th>
          <th>Email</th>
          <th>Địa Chỉ</th>
          <th>Số điện thoại</th>
          <th>Trạng Thái</th>
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
