import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { atom, useAtom } from "jotai";
import axios from "axios";
import { API_URL, TOKEN } from "../utils";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const imageUrlAtom = atom<string>("");
export const uploadedImageIdAtom = atom<number | undefined>(undefined);
const CardUpload: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useAtom(imageUrlAtom);
  const [uploadedImageId, setUploadedImageId] = useAtom(uploadedImageIdAtom);
  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    console.log("info.fileList", info.fileList);
    console.log("info.file.status", info.file.status);
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setLoading(false);
      setImageUrl(url);
    });

    if (!info.file.originFileObj) {
      console.error("請選擇要上傳的文件");
      return;
    }

    const formData = new FormData();
    formData.append("files", info.file.originFileObj);

    try {
      const response = await axios.post(`${API_URL}/api/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      console.log("⭐ response.data[0].id:", response.data[0].id);
      setUploadedImageId(response?.data?.[0]?.id);
      console.log(
        "⭐ ~ file: CardUpload.tsx:34 ~ uploadedImageId:",
        uploadedImageId
      );

      console.log("文件上傳成功");
    } catch (error) {
      console.error("上傳文件時發生錯誤", error);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader w-fit "
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default CardUpload;
