import { useState } from "react";
import { Input, Button } from "antd";
import CardUpload, {
  imageUrlAtom,
  uploadedImageIdAtom,
} from "../components/CardUpload";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, TOKEN } from "../utils";
import { useAtomValue, useSetAtom } from "jotai";

const { TextArea } = Input;
const AddCard = ({
  setIsFetch,
}: {
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const imageUrl = useAtom<string>(imageUrlAtom);
  const uploadedImageId = useAtomValue<number | undefined>(uploadedImageIdAtom);
  console.log("⭐ ~ file: AddCard.tsx:22 ~ uploadedImageId:", uploadedImageId);
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

  // const [selectedFile, setSelectedFile] = useState<File>();

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.target.files
  //     ? setSelectedFile(event.target.files[0])
  //     : console.log("error");
  // };
  // const handleUpload = async () => {
  // if (!selectedFile) {
  //   console.error("請選擇要上傳的文件");
  //   return;
  // }

  // const formData = new FormData();
  // formData.append("files", selectedFile);

  // try {
  //   const response = await axios.post(`${API_URL}/api/upload/`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${TOKEN}`,
  //     },
  //   });
  //   console.log(
  //     "⭐ ~ file: AddCard.tsx:114 ~ handleUpload ~ formData:",
  //     formData
  //   );
  //   // const fileId = response.data[0].url;
  //   console.log("⭐ response.data[0].id:", response.data[0].id);
  //   setUploadedImageId(response?.data?.[0]?.id);

  //   console.log("文件上傳成功");
  // } catch (error) {
  //   console.error("上傳文件時發生錯誤", error);
  // }
  // };

  const handleClick = async () => {
    const newCard = {
      title,
      category,
      description,
      like: 0,
      dislike: 0,
      image: uploadedImageId,
    };

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
        setIsFetch((prev) => !prev);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <Button
            type="primary"
            className="bg-[#e9c46a] rounded"
            onClick={handleClick}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};
export default AddCard;
