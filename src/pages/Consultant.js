import { DatePicker, Grid, Table } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FormDialog from "../components/dialog";
import { ChiTietConsultantsAction, DeleteConsultantsAction, EditConsultantsAction, GetConsultantsAction } from "../redux/action/ConsultantsAction";
import EditConsultants from "./EditConsultants";
import { useFormik } from "formik";
import moment from "moment";
import { Tag, Radio } from 'antd';
import { NavLink } from "react-router-dom";

export default function Consultant () {

  const { arrConsultants, chiTietConsultants } = useSelector(rootReducer => rootReducer.ConsultantsReducer);
  const dispatch = useDispatch()
  console.log(chiTietConsultants);

  const [search, setSearch] = useState("");
  const [consultant, setConsultant] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleFromSubmit = async () => {
  //   // store the states in the form data
  //   const loginFormData = new FormData();
  //   loginFormData.append("name", formData.name);
  //   loginFormData.append("email", formData.email);
  //   loginFormData.append("phone", formData.phone);
  //   loginFormData.append("address", formData.address);
  //   try {
  //     // make axios post request
  //     // const response = await axios({
  //     //   method: "post",
  //     //   url: "https://www.psychologicalcounselingv1.somee.com/api/Consultants/create",
  //     //   data: loginFormData,
  //     //   headers: { "Content-Type": "multipart/form-data" },

  //     // }).then((res) => {
  //     //   handleClose();
  //     // });

  //     //
  //     axios
  //       .post(
  //         `https://www.psychologicalcounselingv1.somee.com/api/Consultants/create`,
  //         loginFormData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         handleClose();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  React.useEffect(() => {
    // axios
    //   .get(
    //     `https://www.psychologicalcounselingv1.somee.com/api/Consultants/Getallconsultant`
    //   )
    //   .then((res) => {
    //     setConsultant(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });


    const action = GetConsultantsAction();
    dispatch(action);
  }, []);

  const handleChangeDate = (name) => {
    return (value) => {
      const date = moment(value)
      formik.setFieldValue(name, date)
    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: chiTietConsultants[0]?.id,
      fullName: chiTietConsultants[0]?.fullName,
      email: chiTietConsultants[0]?.email,
      price: chiTietConsultants[0]?.price,
      address: chiTietConsultants[0]?.address,
      dob: chiTietConsultants[0]?.dob,
      gender: chiTietConsultants[0]?.gender,
      phone: chiTietConsultants[0]?.phone,
      status: chiTietConsultants[0]?.status,
      experience: chiTietConsultants[0]?.experience,
      rating: chiTietConsultants[0]?.rating,
      skills: chiTietConsultants[0]?.skills,
      feedback: chiTietConsultants[0]?.feedback,

    },
    onSubmit: (value) => {
      console.log(value);
      const action = EditConsultantsAction(value);
      dispatch(action);
    }
  })

  return (
    <div>
      <FormDialog
        open={open}
        // handleFromSubmit={handleFromSubmit}
        // handleClose={handleClose}
        data={formData}
        onChange={onChange}
      />
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-primary">Search</button>
        <grid>
          <NavLink to='/createconsultant' className='bg-primary text-white p-2'> Create New</NavLink>
        </grid>
      </form>

      <table className="table">
        <thead>
          <th>Stt</th>
          <th>Họ và tên</th>
          <th>Email</th>
          {/* <th>Địa Chỉ</th>
          <th>Số điện thoại</th> */}
          <th>Xếp Hạng</th>
          <th>Trạng Thái</th>
          <th>Kỹ Năng</th>
          <th></th>
          <th></th>
        </thead>

        {arrConsultants &&
          arrConsultants.map((item, index) => {
            return (
              <tbody key={index}>
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>
                  {
                    item.rating === 1 ? <Tag color="red">1</Tag> :
                      item.rating === 2 ? <Tag color="orange">2</Tag> :
                        item.rating === 3 ? <Tag color="green">3</Tag> :
                          item.rating === 4 ? <Tag color="cyan">4</Tag> :
                            item.rating === 5 ? <Tag color="blue">5</Tag> : <Tag color="purple">0</Tag>
                  }

                </td>
                <td>
                  {item.status === "active" ? (
                    <Tag color="green">Đang hoạt động</Tag>
                  ) : (
                    <Tag color="red">Ngừng hoạt động</Tag>
                  )}

                </td>
                <td>
                  {
                    item.skills === "1" ? <Tag color="green">Bói chén</Tag> :
                      item.skills === "psychiatrist" ? <Tag color="cyan">Nhà tâm thần</Tag> :
                        item.skills === "psychologist" ? <Tag color="blue">Nhà tâm lý</Tag> :
                          item.skills === "psychologist" ? <Tag color="purple">Nhà tâm lý</Tag> :
                            item.skills === "psychologist" ? <Tag color="red">Nhà tâm lý</Tag> :
                              item.skills === "psychologist" ? <Tag color="orange">Nhà tâm lý</Tag> : <Tag color="green">Bói chén</Tag>

                  }

                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    data-toggle="modal" data-target="#exampleModalCenter"
                    onClick={() => {
                      const action = ChiTietConsultantsAction(item.id);
                      dispatch(action);

                    }

                    }


                  >
                    Chi Tiết
                  </button>
                </td>
                {/* Kích hoạt trạng thái tk */}
                <td>
                  {item.status === "active" ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const action = DeleteConsultantsAction(item.id);
                        dispatch(action);
                      }}
                    >
                      Ngừng hoạt động
                    </button>
                  ) : (
                    <button

                      className="btn btn-success"
                      onClick={() => {
                        const action = DeleteConsultantsAction(item.id);
                        dispatch(action);
                      }}
                    >
                      Hoạt động
                    </button>
                  )}

                  {/* <button 
                    className="btn btn-primary"
                  onClick={() => {
                    const action = DeleteConsultantsAction(item.id);
                    dispatch(action);
                    
                  }}>
                    {
                      
                      item.status === "active" ? "Ngừng hoạt động" : "Kích hoạt"
                    
                      
                    }
                  </button> */}
                </td>
              </tbody>
            );
          })}
      </table>
      <div className='container'>
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Chi Tiết: {chiTietConsultants[0]?.fullName}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmitCapture={formik.handleSubmit}>
                  <div className='row container-DetailZodiac'>

                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Họ và Tên: </label>
                        <input className='form-control' placeholder='Họ và Tên' name='fullName' onChange={formik.handleChange} value={formik.values.fullName} />
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Email: </label>
                        <input className='form-control' placeholder='Email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Địa Chỉ: </label>
                        <input className='form-control' placeholder='Address' name='address' onChange={formik.handleChange} value={formik.values.address} />
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Ngày Sinh: </label>
                        <DatePicker class='form-control' format="YYYY/DD/MM" name='dob' onChange={handleChangeDate('dob')} value={moment(formik.values.dob)} />
                      </div>
                    </div>

                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label>
                          <span>*</span>Giới Tính:{' '}
                        </label>
                        {/* <select className="form-control" name= ""
                        >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            onChange={formik.handleChange}
                            
                      
                        </select> */}
                        {/* Edit gender */}
                        <Radio.Group name="
                          " onChange={formik.handleChange} value={formik.values.gender}>
                          <Radio value="1">Nam</Radio>
                          <Radio value="">Nữ</Radio>
                        </Radio.Group>



                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Số Điện Thoại: </label>
                        <input className='form-control' placeholder='Phone Number' name='phone' onChange={formik.handleChange} value={formik.values.phone} />
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Kinh Nghiệm: </label>
                        <input className='form-control' placeholder='Experience' name='experience' onChange={formik.handleChange} value={formik.values.experience} />
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-12'>
                      <div className='form-group'>
                        <label ><span>*</span>Kỹ Năng: </label>
                        <input className='form-control' placeholder='' name='feedback' onChange={formik.handleChange} value={formik.values.skills} />
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <button type="submit" class="btn btn-primary">Sửa</button>
                      {/* <button type="button" class="btn btn-primary">Reset</button> */}
                    </div>
                    <button type="submit" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div >
  );
}
