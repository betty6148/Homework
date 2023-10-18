/* eslint-disable react-refresh/only-export-components */
import { Input, Button } from "antd";
import EditCardDetail from "../components/EditCardDetail";
import Count from "../components/Count";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TData } from "../types";
import axios from "axios";
import { API_URL, TOKEN } from "../utils";
import { atom, useAtom, useAtomValue } from "jotai";

import { uploadedImageIdAtom } from "../components/CardUpload";
const { TextArea } = Input;

export const isUploadAtom = atom<boolean>(true);

const isLoading = false;

const EditCard = ({
  cardList,
  setIsFetch,
}: {
  cardList: TData[];
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { id } = useParams();
  const uploadedImageId = useAtomValue<number | undefined>(uploadedImageIdAtom);

  const [isUpload, setIsUpload] = useAtom(isUploadAtom);

  // const item_array = dataItems.filter((data) =>  data.id.toString() === id); // return array
  const item = cardList.find((data) => data.id.toString() === id); // return array
  const [inputTitle, setInputTitle] = useState<string>(
    item?.attributes.title || ""
  );
  const [inputDescription, setInputDescription] = useState<string>(
    item?.attributes.description || ""
  );

  const TextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const TextAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputDescription(e.target.value);
  };

  const handleChangeImg = () => {
    setIsUpload(!isUpload);
  };

  const newCard = {
    title: inputTitle,
    category: inputTitle,
    description: inputDescription,
    image: uploadedImageId,
  };
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .put(
        `${API_URL}/api/cards/${id}`,
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
        setIsFetch((prev) => !prev);
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/member");
  };

  return (
    <>
      <div className=" w-4/5 m-auto mt-12">
        <div className="flex justify-center">
          <div className="flex-col justify-center">
            {!isLoading && item ? (
              <EditCardDetail
                id={item.id}
                name={inputTitle}
                category={item.attributes.title}
                imgURL={
                  `${API_URL}` +
                  item?.attributes?.image?.data?.attributes?.formats?.thumbnail
                    ?.url
                }
                description={inputDescription}
                like={item.attributes.like}
                dislike={item.attributes.dislike}
                remove={handleChangeImg}
              />
            ) : (
              <>No data</>
            )}
            {isLoading && (
              <>
                <div className="animate-pulse bg-slate-500 aspect-[3/4] w-full rounded-lg"></div>
              </>
            )}

            <div className="flex justify-center">
              {!isLoading && item ? (
                <Count
                  like={item.attributes.like}
                  dislike={item.attributes.dislike}
                />
              ) : (
                <>No data</>
              )}
            </div>
          </div>
        </div>

        <div className="py-8 mx-12">
          <Input
            className="mb-2"
            onChange={TextOnChange}
            placeholder="Title"
            defaultValue={item?.attributes.title}
          />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            onChange={TextAreaOnChange}
            placeholder="Describe..."
            defaultValue={item?.attributes.description}
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="primary"
            onClick={handleClick}
            className="bg-[#e9c46a] rounded"
          >
            OK
          </Button>
        </div>
      </div>
    </>
  );
};
export default EditCard;
