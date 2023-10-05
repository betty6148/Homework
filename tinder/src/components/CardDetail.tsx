import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
// import dataItems from "../data";
const { Meta } = Card;

const CardDetail = ({ id, title, image, description, remove }) => {
  // console.log("⭐ ~ file: CardDetail.js:9 ~ CardDetail ~ remove:", remove);
  // console.log("⭐ ~ file: CardDetail.js:9 ~ CardDetail ~ id:", id);
  return (
    <>
      <div>
        <Link to={`/edit/${id}`}>
          <Card
            className="w-full"
            cover={
              <img alt="" className="aspect-[3/4] object-cover" src={image} />
            }
            actions={[<DeleteOutlined onClick={remove} />]}
          >
            <Meta title={title} description={description} />
          </Card>
        </Link>
      </div>
    </>
  );
};

export default CardDetail;
