import { Input, Button } from "antd";
import CardDetail from "../components/CardDetail";
import Count from "../components/Count";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { TData } from "../types";
import { API_URL } from "../utils";

const { TextArea } = Input;

const isLoading = false;
const EditCard = ({ cardList }: { cardList: TData[] }) => {
  const { id } = useParams();
  // const item_array = dataItems.filter((data) =>  data.id.toString() === id); // return array
  const item = cardList.find((data) => data.id.toString() === id); // return array
  const [inputTitle, setInputTitle] = useState<string>(
    item?.attributes.title || ""
  );
  const [inputDescription, setInputDescription] = useState<string>(
    item?.attributes.description || ""
  );
  // 	const [img,setImg]=useState(item?.imgURL||"")
  // const handleClick=()=>{
  // 	setImg("")
  // }
  // console.log("⭐ ~ file: EditCard.tsx:15 ~ EditCard ~ data:", data);

  const TextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const TextAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputDescription(e.target.value);
  };

  return (
    <>
      <div className=" w-4/5 m-auto mt-12">
        <div className="flex justify-center">
          <div className="flex-col justify-center">
            {!isLoading && item ? (
              <CardDetail
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
                // remove={}
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

        <div className="py-8">
          <Input placeholder="Title" className="mb-2" onChange={TextOnChange} />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            onChange={TextAreaOnChange}
            placeholder="Describe..."
          />
        </div>
        <div className="flex justify-center">
          <Button type="primary">OK</Button>
        </div>
      </div>
    </>
  );
};
export default EditCard;
