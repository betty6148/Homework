import { useState } from "react";
import { Input, Button } from "antd";
import CardUpload, { imageUrlAtom } from "../components/CardUpload";
import { Link } from "react-router-dom";
// import { nanoid } from "nanoid";
// import { TData } from "../types";
import axios from "axios";
import { API_URL, TOKEN } from "../utils";
import { useAtom, useSetAtom } from "jotai";

const { TextArea } = Input;
const AddCard = ({
  isFetch,
  setIsFetch,
}: {
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
  isFetch: boolean;
}) => {
  const imageUrl = useAtom<string>(imageUrlAtom);
  console.log("⭐ ~ file: AddCard.tsx:14 ~ AddCard ~ imageUrl:", imageUrl);

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

  const newCard = {
    title,
    category,
    description,
    like: 0,
    dislike: 0,
  };

  const handleClick = () => {
    axios
      .post(
        `${API_URL}/api/cards`,
        {
          data: newCard,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setIsFetch(!isFetch);
        // TODO: 為什麼 redirect 不行? By Eleanor & Betty
        // redirect("/member");
        // navigate("/member");

        // TODO: step2: reload
        // FIXME: find another way
        // window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .post(
    //     `${API_URL}/api/upload/`,
    //     {
    //       url: imageUrl[0],
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${TOKEN}`,
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
