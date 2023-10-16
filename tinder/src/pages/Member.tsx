// import { useEffect } from "react";
import CardDetail from "../components/CardDetail";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { TData } from "../types";
import axios from "axios";
import { API_URL, TOKEN } from "../utils";

const Member = ({
  cardList,
  // setCardList
  setIsFetch,
  isFetch,
}: {
  cardList: TData[];
  // setCardList: React.Dispatch<React.SetStateAction<TData[]>>;
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
  isFetch: boolean;
}) => {
  const handleDelete = (id: number | string) => () => {
    // const filteredArray = cardList.filter((item) => item.id !== id);

    axios
      .delete(`${API_URL}/api/cards/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setCardList(cardList);
  };
  setIsFetch(!isFetch);

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
