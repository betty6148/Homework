import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="bg-header p-2 shadow d-flex justify-content-between flex items-center ...">
        <div className="text-light">
          <i className="bi bi-life-presever"></i>
          <span className="fs-5 ps-2">學習react</span>
        </div>
        <div className="btnset">
          <button className="btn btn-primary btn-sm mx-1 ">登入</button>
          <button className="btn  btn-sm mx-1">登出</button>
        </div>
      </div>
    </>
  );
};

export default Header;
