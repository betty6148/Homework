import React from "react";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Member = ({ list, setList }) => {
  const handleDelete = (id) => (e) => {
    e.preventDefault();
    const filteredArray = list.filter((item) => item.id !== id);
    setList(filteredArray);
    e.stopPropagation();
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8 justify-center justify-items-center">
        {list.map((item) => (
          <CardDetail
            key={item.id}
            id={item.id}
            title={item.name}
            image={item.imgURL}
            description={item.description}
            remove={handleDelete(item.id)}
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
    </div>
  );
};

export default Member;
