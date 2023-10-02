import React from "react";

const ListDetail = (props) => {
  return (
    <div className="row">
      <p className="col-3">{props.text}</p>
      <button
        type="button"
        className="col-3 btn btn-outline-danger"
        onClick={props.delete}
      >
        delete
      </button>
    </div>
  );
};

export default ListDetail;
