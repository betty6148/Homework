import React from "react";


const ItemDetail2 = ({ title, image, content, link }) => {

  const handleClick = (value) => {
    const mapping = {
        Title1: 0,
        Title2: 1
    }
    

    console.log(`${mapping[value]}被點了`);
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }} onClick={() => handleClick}>
        <img src={image} className="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemDetail2;
