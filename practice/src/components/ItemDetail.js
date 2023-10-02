import React ,{useState}from "react";

const ItemDetail = () => {
    const ItemImage = "https://picsum.photos/id/684/300/200"
    // const ItemTitle = "Title"
    const ItemContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const ItemLink = "#"

    let [ItemTitle,setItemTitle]=useState("Title");
    const btn_click = (event)=>{
        // console.log("btn_click",Math.random())
        setItemTitle("NewTitle"); 
    }

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={ItemImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ItemTitle}</h5>
                    <p className="card-text">{ItemContent}</p>
                    <a href={ItemLink} className="btn btn-primary">Go somewhere</a>
                    <hr />
                    <buton className="btn btn-success" onClick={btn_click}>按鈕</buton>
                </div>
            </div>
        </>

    )
}

export default ItemDetail;

