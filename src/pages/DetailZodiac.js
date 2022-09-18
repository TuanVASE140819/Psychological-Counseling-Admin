import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailZodiacAction,
  EditZodiacAction,
  LayDanhSachHousesAction,
} from "../redux/action/QuanLyZodiacAction";
import { RadioChangeEvent, DatePicker } from "antd";
import { Radio, Space, Tabs } from "antd";
import { HiPencil } from "react-icons/hi";
import { Field, useFormik } from "formik";
import moment from "moment";
import {
  ChiTietHousesAction,
  DeleteHousesAction,
  EditHousesAction,
  GetHousesAction,
} from "../redux/action/HousesAction";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NavLink } from "react-router-dom";

export default function DetailZodiac(props) {
  const [show, setShow] = useState(""); // state của text editor
  const dispatch = useDispatch();
  const { chiTietZodiac, arrHouses } = useSelector(
    (rootReducer) => rootReducer.QuanLyZodiac
  );

  console.log(chiTietZodiac);
  useEffect(() => {
    const id = props.match.params.id;

    const action = DetailZodiacAction(id);
    dispatch(action);
    const action1 = LayDanhSachHousesAction();
    dispatch(action1);
  }, []);

  console.log(chiTietZodiac);
  const handleChangeDate = (name) => {
    return (value) => {
      const date = moment(value);
      formik.setFieldValue(name, date);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: chiTietZodiac[0]?.id,
      imageUrl: chiTietZodiac[0]?.imageUrl,
      name: chiTietZodiac[0]?.name,
      dateStart: chiTietZodiac[0]?.dateStart,
      dateEnd: chiTietZodiac[0]?.dateEnd,

      descriptionShort: chiTietZodiac[0]?.descriptionShort,
      descriptionDetail: chiTietZodiac[0]?.descriptionDetail,
    },
    onSubmit: (value) => {
      console.log(value);
      const action = EditZodiacAction(value);
      dispatch(action);
    },
  });

  React.useEffect(() => {
    const action = GetHousesAction();
    dispatch(action);
  }, []);
  return (
    <div>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <div className="row bg-white">
          <div className="col-6 ">
            <div className="p-2">
              <h3>{chiTietZodiac[0]?.name}</h3>
              <p>
                ({moment(chiTietZodiac[0]?.dateStart).format("DD/MM")}) - (
                {moment(chiTietZodiac[0]?.dateEnd).format("DD/MM")})
              </p>
              <div className="d-flex justify-content-center mt-5">
                <img
                  src={chiTietZodiac[0]?.imageUrl}
                  className="rounded mx-100 d-block"
                  style={{
                    height: "300px",
                    width: "300px",
                    paddingBottom: "50px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <h6 className="mt-5">Chòm Sao {chiTietZodiac[0]?.name}</h6>
              <p className="mt-3">
                <span className="font-weight-bold">Biểu Tượng : </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Thể Thức: </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Nguyên Tố : </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Hành Tinh : </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Cung Địa Bàn : </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Tuyên Ngôn : </span>
                {chiTietZodiac[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Nội Dung Ngắn: </span>
                {chiTietZodiac[0]?.descriptionShort}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Chi Tiết" key="1" className="bg-white">
          <div className="" style={{ paddingLeft: "50px" }}>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h6>Chòm Sao {chiTietZodiac[0]?.name}</h6>
              <div
                style={{
                  marginRight: "20px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  borderRadius: "7px",
                  padding: "5px 8px",
                }}
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                {" "}
                <HiPencil />
              </div>

              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div
                    class="modal-content"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Chỉnh sửa Cung
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form onSubmitCapture={formik.handleSubmit}>
                        <div className="row container-DetailZodiac">
                          <div className="col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label>
                                <span>*</span>Tên Cung{" "}
                              </label>
                              <input
                                className="form-control"
                                placeholder="Tên Cung"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label>Ngày Tháng Bắt Đầu: </label>
                              <DatePicker
                                format="YYYY/DD/MM"
                                name="dateStart"
                                onChange={handleChangeDate("dateStart")}
                                value={moment(formik.values.dateStart)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                              <label> Ngày Tháng Kết Thúc:</label>
                              <DatePicker
                                format="YYYY/DD/MM"
                                name="dateEnd"
                                onChange={handleChangeDate("dateEnd")}
                                value={moment(formik.values.dateEnd)}
                              />
                            </div>
                          </div>

                          <div className="col-md-12 col-sm-6 col-12">
                            <div className="form-group">
                              <label>Mô tả ngắn : </label>
                              {/* <ReactQuill className="shadow-sm"
                                                                theme="snow"
                                                                style={{
                                                                    height: 200,
                                                                    marginTop: '1rem',
                                                                    display: 'flex',
                                                                    flexDirection: 'column'
                                                                }}

                                                                value={show}

                                                                modules={{
                                                                    toolbar: [
                                                                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], [{ size: [] }],
                                                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                                        [{ 'align': [] }],
                                                                        [{ 'color': [] }, { 'background': [] }],
                                                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                                                        ['link', "video", "image", "code-block"],
                                                                        ['clean']
                                                                    ],
                                                                }}
                                                                formats={[
                                                                    'header', 'font', 'size',
                                                                    'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                                                                    'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                                                                ]}
                                                                name='descriptionShort' onChange={formik.handleChange}
                                                            /> */}
                              <textarea
                                className="form-control"
                                name="descriptionShort"
                                onChange={formik.handleChange}
                                rows="5"
                                cols="80"
                                value={formik.values.descriptionShort}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-6 col-12">
                            <div className="form-group">
                              <label>Nội Dung Chính : </label>
                              <textarea
                                className="form-control"
                                name="descriptionDetail"
                                rows="5"
                                cols="80"
                                onChange={formik.handleChange}
                                value={formik.values.descriptionDetail}
                              />
                              {/* <Field name="descriptionDetail" as="textarea" className="form-textarea" /> */}
                            </div>
                          </div>
                        </div>

                        <div
                          class="modal-footer"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <button type="submit" class="btn btn-primary">
                              Edit
                            </button>
                            {/* <button type="button" class="btn btn-primary">Reset</button> */}
                          </div>
                          <button
                            type="submit"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className='mt-3'><span className='font-weight-bold'>Biểu Tượng : </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Thể Thức: </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Nguyên Tố : </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Hành Tinh : </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Cung Địa Bàn : </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Tuyên Ngôn : </span>{chiTietZodiac[0]?.name}</p>
                        <p className='mt-3'><span className='font-weight-bold'>Nội Dung: </span>{chiTietZodiac[0]?.name}</p> */}
            <p className="mt-3">
              <span className="font-weight-bold">*Nội Dung: </span>
              {chiTietZodiac[0]?.descriptionDetail}
            </p>
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Cung & Nhà" key="2" className="bg-white">
          <div className="p-5">
            <button className="btn btn-primary mb-5">Thêm Dữ Liệu</button>

            {arrHouses &&
              arrHouses?.map((item, index) => {
                return (
                  <div>
                    <div className="as_sign_box text-centerr">
                      <a href="service_single.html">
                        <span className="as_sign">
                          <img src={item.imageUrl} alt />
                        </span>
                        <div>
                          <h5>{item.name}</h5>
                          <p>{item.datestart}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                gap: "10px",
              }}
            ></div>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
