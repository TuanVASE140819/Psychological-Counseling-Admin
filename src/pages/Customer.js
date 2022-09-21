import { DownOutlined } from "@ant-design/icons";
import { border } from "@mui/system";
import { Badge, Dropdown, Menu, Space, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomersAction } from "../redux/action/CustomersAction";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Action 1",
      },
      {
        key: "2",
        label: "Action 2",
      },
    ]}
  />
);

const Customer = () => {
  const dispatch = useDispatch();
  const { arrCustomers } = useSelector(rootReducer => rootReducer.CustomersReducer);
  console.log('thinh' + arrCustomers);

  useEffect(() => {
    const action = GetCustomersAction();
    dispatch(action);
  }, []);
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Tên",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Hình đại diện",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Ngày sinh",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: "Nơi sinh",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <div>
            <button
              style={{
                marginRight: "15px",
                border: "1px solid #5c6bc0",
                backgroundColor: "#5c6bc0",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Edit
            </button>
            <button
              style={{
                border: "1px solid #5c6bc0 ",
                backgroundColor: "#42a5f5",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ];
    const data = [];

    for (let i = 0;i < 3;++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "Stt",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    // {
    //   title: "Action",
    //   dataIndex: "Biểu Tượng",
    //   key: "Biểu Tượng",
    // },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <div>
          <button
            style={{
              backgroundColor: "#5c6bc0",
              border: "1px solid #5c6bc0",
              borderRadius: "5px",
            }}
          >
            Sửa
          </button>
          {/* <button
            style={{
              marginLeft: '10px',
              backgroundColor: "rgba(0,0,0,0.5)",
              border: "1px solid #5c6bc0",
              borderRadius: "5px",
            }}
            onClick={() => {
              console.log();
            }}
          >
            Delete
          </button> */}
        </div>
      ),
    },
  ];
  const data = [];

  arrCustomers.map((item, index) => {
    return data.push({
      key: `${item.id}`,
      fullname: `${item.fullname}`,
      email: `${item.email}`,
      status: `${item.status}`,
      operation: `${item.id}`,

      // platform: "iOS",
      // version: "10.3.4.5654",
      // upgradeNum: 500,
      // creator: "Jack",
      // createdAt: "2014-12-24 23:12:00",
    });
  }
  )


  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
      />
      {/* {arrCustomers.map((item, index) => {
        return <div key={index}>
          <p>{item.email}</p>
        </div>
      })} */}
    </>
  );
};

export default Customer;
