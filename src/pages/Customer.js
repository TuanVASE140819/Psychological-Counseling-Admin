import { DownOutlined } from "@ant-design/icons";
import { border } from "@mui/system";
import { Badge, Dropdown, Menu, Space, Table } from "antd";
import React from "react";
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

    for (let i = 0; i < 3; ++i) {
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
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "Tên nhà",
      key: "Tên nhà",
    },
    {
      title: "Trạng thái",
      dataIndex: "Biểu Tượng",
      key: "Biểu Tượng",
    },
    {
      title: "Action",
      dataIndex: "Biểu Tượng",
      key: "Biểu Tượng",
    },
    {
      title: "Action",
      key: "operation",
      render: () => (
        <button
          style={{
            backgroundColor: "#5c6bc0",
            border: "1px solid #5c6bc0",
            borderRadius: "5px",
          }}
        >
          Publish
        </button>
      ),
    },
  ];
  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: "NHÀ 1",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }

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
    </>
  );
};

export default Customer;
