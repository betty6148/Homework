import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
// import data from "../data";
const { Meta } = Card;

const CardDetail = ({ id, title, image, describe }) => {
  // const handleDelete = () => {};
  return (
    <>
      <Link to={`/edit/${id}`}>
        <Card
          className="w-full"
          cover={
            <img alt="" className="aspect-[3/4] object-cover" src={image} />
          }
          actions={[<DeleteOutlined />]}
        >
          <Meta title={title} description={describe} />
        </Card>
      </Link>
      {/* <button onClick={handleDelete}></button> */}
    </>
  );
};

export default CardDetail;
