import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { atom, useAtom } from "jotai";
// import axios from "axios";
// import { API_URL, TOKEN } from "../utils";

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
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useAtom(imageUrlAtom);
  // const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  // const file = new FormData();
  // file.append("image", imageUrl[0]);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setLoading(false);
      setImageUrl(url);
      // axios
      //   .post(`${API_URL}/api/upload/`, file)
      //   .then((response) => {
      //     // const fileId = response.data[0].id;
      //     console.log(response);
      //     axios
      //       .post(
      //         `${API_URL}/api/card/`,
      //         {
      //           FormData: file,
      //         },
      //         {
      //           headers: {
      //             Authorization: `Bearer ${TOKEN}`,
      //             // "Content-Type": "multipart/form-data",
      //           },
      //         }
      //       )
      //       .then(function (response) {
      //         console.log(response);
      //       })
      //       .catch(function (error) {
      //         console.log(error);
      //       });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    });
    // }
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
        className="avatar-uploader w-fit"
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

export default App;
