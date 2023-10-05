import React from "react";
import { HeartFilled, DislikeFilled } from "@ant-design/icons";

const Count = (props) => {
  return (
    <>
      <div className="my-2 ">
        <div className="inline mr-3">
          <HeartFilled />
          <p className="inline ml-1">{props.like}</p>
        </div>
        <div className="inline">
          <DislikeFilled />
          <p className="inline ml-1">{props.dislike}</p>
        </div>
      </div>
    </>
  );
};

export default Count;
