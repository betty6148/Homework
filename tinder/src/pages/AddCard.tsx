import { useState } from "react";
import { Input, Button } from "antd";
import CardUpload from "../components/CardUpload";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { TDataItem } from "../types";

const { TextArea } = Input;
const AddCard = ({
  list,
  setList,
}: {
  list: TDataItem[];
  setList: React.Dispatch<React.SetStateAction<TDataItem[]>>;
}) => {
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
      id: nanoid(),
      name: title,
      category,
      imgURL: "#",
      description,
    };
    setList([...list, newContent]);
  };

  // type TStatus = "PROCESSING" | "PENDING" | "COMPLETE" | "CANCEL" | "REFUND";

  // const [status, setStatus] = useState<{
  //   label: TStatus;
  //   value?: TStatus;
  // }>({
  //   label: "PENDING",
  //   value: "PENDING",
  // });

  // useEffect(() => {
  //   const newStatus = {
  //     label: "COMPLETE",
  //   } as {
  // 		label: TStatus;
  // 	};
  //   setStatus(newStatus);
  // }, []);

  return (
    <>
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
          <Link to="/member">
            <Button type="primary">GO to Member</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AddCard;
