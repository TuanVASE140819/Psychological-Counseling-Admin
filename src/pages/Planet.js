import React from 'react'
import moment from "moment";
import {
  ChiTietPlanetsAction,
  DeletePlanetsAction,
  EditPlanetsAction,
  GetPlanetsAction,
} from "../redux/action/PlanetsAction";

function planet() {
  return (
    <div>

<div style={{ width: "95%", margin: "0 auto" }}>
        <div className="row bg-white">
          <div className="col-6 ">
            <div className="p-2">
              <h3>{ChiTietPlanetsAction[0]?.name}</h3>
              <p>
                ({moment(ChiTietPlanetsAction[0]?.dateStart).format("DD/MM")}) - (
                {moment(ChiTietPlanetsAction[0]?.dateEnd).format("DD/MM")})
              </p>
              <div className="d-flex justify-content-center mt-5">
                <img
                  src={ChiTietPlanetsAction[0]?.imageUrl}
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
              <h6 className="mt-5">Chòm Sao {ChiTietPlanetsAction[0]?.name}</h6>
              <p className="mt-3">
                <span className="font-weight-bold">Biểu Tượng : </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Thể Thức: </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Nguyên Tố : </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Hành Tinh : </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Cung Địa Bàn : </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Tuyên Ngôn : </span>
                {ChiTietPlanetsAction[0]?.name}
              </p>
              <p className="mt-3">
                <span className="font-weight-bold">Nội Dung Ngắn: </span>
                {ChiTietPlanetsAction[0]?.descriptionShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default planet