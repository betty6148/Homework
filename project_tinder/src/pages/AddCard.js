import React from "react";
import { Input, Button } from "antd";
import CardUpload from "../components/CardUpload";
import Count from "../components/Count";

const { TextArea } = Input;
const onChange = (e) => {
  console.log("Change:", e.target.value);
};
const AddCard = () => {
  return (
    <>
      <div className="w-4/5 m-auto mt-24">
        <div className="flex justify-center">
          <CardUpload />
        </div>

        <div className=" py-8">
          <Input placeholder="Basic usage" className="mb-2" />
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            onChange={onChange}
            placeholder="disable resize"
            className=""
          />
        </div>
        <div className="flex justify-center">
          <Button type="primary">Primary Button</Button>
        </div>
      </div>
    </>
  );
};
export default AddCard;
