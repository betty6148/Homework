import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { TDataItem } from "../types";
const { Meta } = Card;

const CardDetail = ({ id, name, imgURL, description, remove }: TDataItem) => {
  return (
    <>
      <div className="w-full">
        <Card
          className="w-full "
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
