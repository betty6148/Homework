import React from "react";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import { TDataItem } from "../types";
import { TData } from "../types";
import { API_URL } from "../utils";
const Member = ({
  cardList,
  setCardList,
}: {
  cardList: TData[];
  setCardList: React.Dispatch<React.SetStateAction<TData[]>>;
}) => {
  const handleDelete = (id: number | string) => () => {
    const filteredArray = cardList.filter((item) => item.id !== id);
    setCardList(filteredArray);
  };
  console.log("⭐ ~ file: Member.tsx:16 ~ cardList:", cardList);

  return (
    <>
      <Link to="/">
        <Button type="default">Go to Home</Button>
      </Link>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8 justify-center justify-items-center">
          {cardList.map((item) => (
            <CardDetail
              key={item.id}
              id={item.id}
              name={item.attributes.title}
              category={item.attributes.title}
              imgURL={
                `${API_URL}` +
                item.attributes?.image?.data?.attributes?.formats?.thumbnail
                  ?.url
              }
              description={item.attributes.description}
              remove={handleDelete(item.id)}
              like={item.attributes.like}
              dislike={item.attributes.dislike}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/add">
            <Button
              className="w-36 mb-8 "
              type="primary"
              shape="round"
              icon={<PlusCircleOutlined />}
            >
              Add New
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Member;
