import React from "react";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dataItems from "../data";
import { useState } from "react";

const Member = () => {
  const [list, setList] = useState([dataItems]);

  const handleDelete = (id) => () => {
    const filteredArray = list.filter((item) => item.id !== id);
    setList(filteredArray);
  };

  console.log("⭐ ~ file: Member.js:22 ~ Member ~ dataItems:", dataItems);
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8 justify-center justify-items-center">
        {dataItems.map((item) => (
          <CardDetail
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.imgURL}
            describe={item.describe}
            delete={handleDelete(item.id)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/add">
          <Button
            className="w-36 mb-8"
            type="primary"
            shape="round"
            icon={<PlusCircleOutlined />}
          >
            Add New
          </Button>
        </Link>
      </div>
      {/* <FloatButton
        icon={<PlusCircleOutlined />}
        type="primary"
        style={{
          right: 24,
        }}
      >
        Add New
      </FloatButton> */}
    </div>
  );
};

export default Member;
