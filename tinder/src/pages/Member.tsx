import React from "react";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { TDataItem } from "../types";

const Member = ({
  list,
  setList,
}: {
  list: TDataItem[];
  setList: React.Dispatch<React.SetStateAction<TDataItem[]>>;
}) => {
  const handleDelete = (id: string | number) => () => {
    const filteredArray = list.filter((item) => item.id !== id);
    setList(filteredArray);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-8 justify-center justify-items-center">
        {list.map((item) => (
          <CardDetail
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.name}
            imgURL={item.imgURL}
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
