import React, { useState } from "react";

const MyStyle = () => {
  const [flg, setFlg] = useState();

  const btn_click = () => {
    setFlg(!flg);
  };

  return (
    <>
      <h1
        style={{
          color: flg ? "red" : "blue",
          backgroundColor: flg ? "yellow" : "gray",
        }}
      >
        MyStyle
      </h1>
      <hr />
      {/* {flg.toString()} */}
      <hr />
      <button className="" onClick={btn_click}>
        change
      </button>
    </>
  );
};

export default MyStyle;
