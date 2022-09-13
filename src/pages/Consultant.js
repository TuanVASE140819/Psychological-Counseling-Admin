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
    phone: "",
    address: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFromSubmit = async () => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("name", formData.name);
    loginFormData.append("email", formData.email);
    loginFormData.append("phone", formData.phone);
    loginFormData.append("address", formData.address);
    try {
      // make axios post request
      // const response = await axios({
      //   method: "post",
      //   url: "https://www.psychologicalcounselingv1.somee.com/api/Consultants/create",
      //   data: loginFormData,
      //   headers: { "Content-Type": "multipart/form-data" },

      // }).then((res) => {
      //   handleClose();
      // });

      //
      axios
        .post(
          `https://www.psychologicalcounselingv1.somee.com/api/Consultants/create`,
          loginFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          handleClose();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    axios
      .get(
        `https://www.psychologicalcounselingv1.somee.com/api/Consultants/Getallconsultant`
      )
      .then((res) => {
        setConsultant(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <FormDialog
        open={open}
        handleFromSubmit={handleFromSubmit}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
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
