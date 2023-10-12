import { useState } from "react";
import { Input, Button } from "antd";
import CardUpload, { imageUrlAtom } from "../components/CardUpload";
import { Link } from "react-router-dom";
// import { nanoid } from "nanoid";
import { TData } from "../types";

import { useAtom, useSetAtom } from "jotai";

const { TextArea } = Input;
const AddCard = ({
  cardList,
  setCardList,
}: {
  cardList: TData[];
  setCardList: React.Dispatch<React.SetStateAction<TData[]>>;
}) => {
  const imageUrl = useAtom<string>(imageUrlAtom);
  const setImageUrl = useSetAtom(imageUrlAtom);
  const [title, setTitle] = useState("");
  const title_onchange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitle(event.target.value);
  };
  const category = title;
  const [description, setDescription] = useState("");
  const description_onchange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDescription(event.target.value);
  };

  const handleClick = () => {
    const newContent = {
      id: cardList.length + 1,
      attributes: {
        title,
        category,
        imgURL: imageUrl[0],
        description,
        like: 0,
        dislike: 0,
      },
    };
    setCardList([...cardList, newContent]);
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <>
      <Link to="/member">
        <Button type="default">Go to Member</Button>
      </Link>
      <div className="w-4/5 m-auto mt-24">
        <div className="flex justify-center">
          <CardUpload />
        </div>

        <div className=" py-8">
          <Input
            id="title"
            value={title}
            onChange={title_onchange}
            placeholder="Title"
            className="mb-2"
          />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            value={description}
            onChange={description_onchange}
            placeholder="Describe..."
            className=""
          />
        </div>
        <div className="flex justify-center">
          <Button type="primary" onClick={handleClick}>
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};
export default AddCard;
