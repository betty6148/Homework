import { UploadOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { TDataItem } from "../types";
import { useAtomValue } from "jotai";
import { isUploadAtom } from "../pages/EditCard";
import CardUpload from "./CardUpload";
const { Meta } = Card;

const EditCardDetail = ({ name, imgURL, description, remove }: TDataItem) => {
  const isUpload = useAtomValue(isUploadAtom);

  return (
    <>
      <div className="w-80">
        <Card
          className="text-center w-full "
          cover={
            isUpload ? (
              <img
                alt={name}
                className="aspect-[7/8] object-cover w-full"
                src={imgURL}
              />
            ) : (
              <div className=" mt-10  ml-1">
                <CardUpload />
              </div>
            )
          }
          actions={[<UploadOutlined onClick={remove} />]}
        >
          <Meta title={name} description={description} />
        </Card>
      </div>
    </>
  );
};

export default EditCardDetail;
