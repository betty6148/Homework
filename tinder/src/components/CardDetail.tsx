import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
// import dataItems from "../data";
import { TDataItem } from "../types";

const { Meta } = Card;

const CardDetail = ({ id, name, imgURL, description, remove }: TDataItem) => {
  // console.log("⭐ ~ file: CardDetail.js:9 ~ CardDetail ~ remove:", remove);
  // console.log("⭐ ~ file: CardDetail.js:9 ~ CardDetail ~ id:", id);
  return (
    <>
      <div className="w-full">
        <Card
          className="w-full"
          cover={
            <Link to={`/edit/${id}`}>
              <img
                alt=""
                className="aspect-[3/4] object-cover w-full"
                src={imgURL}
              />
            </Link>
          }
          actions={[<DeleteOutlined onClick={remove} />]}
        >
          <Link to={`/edit/${id}`}>
            <Meta title={name} description={description} />
          </Link>
        </Card>
      </div>
    </>
  );
};

export default CardDetail;
