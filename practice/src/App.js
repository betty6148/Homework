import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import ItemDetail from "./components/ItemDetail";
// import ItemDetail2 from "./components/ItemDetail2";
// import { nanoid } from "nanoid";
import Form from "./components/Form";
import MyStyle from "./components/MyStyle";
import Form2 from "./components/Form2";
import { Button } from "antd";

function App() {
  const [message, setMessage] = useState("heehee");
  const appData = {
    accessKeyID: "ABC",
    secretAccessKey: "123456",
    regionID: "a",
  };

  const handleAppDataEvent = async (appdata) => {
    // console.log(appdata);
    //準備數據
    const postdata = JSON.stringify({
      accessKeyID: appdata.accessKeyID,
      secretAccessKey: appdata.secretAccessKey,
      regionID: appdata.regionID,
    });

    //將準備好的數據提交到server
    const res = await fetch("http://localhost:9000/test/100", {
      method: "POST",
      body: postdata,

      // header: {
      //   "user-agent": "Mozilla/99.0 MDN Example",
      //   "content-type": "application/json",
      // },
    });

    //將返回結果保存 parse
    try {
      const data = await res.json();
      console.log("🚀 ~ file: App.js:40 ~ handleAppDataEvent ~ data:", data);
      setMessage(data?.message);
    } catch (err) {
      console.log(err);
      setMessage("error....GG");
    }

    // console.log("🚀 ~ file: App.js:38 ~ handleAppDataEvent ~ data:", data);
  };

  return (
    <>
      <Button type="primary" loading={false} size="small">
        123
      </Button>
      <Header />
      <div className="text-center p-4">
        <Form appdata={appData} onSave={handleAppDataEvent}></Form>
      </div>

      <pre>{message}</pre>
      <MyStyle />
      <Form2 />
    </>
  );
  // const dataList = [
  //   {
  //     image: "https://picsum.photos/id/684/300/200",
  //     title: "Title1",
  //     content:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     link: "#",
  //   },
  //   {
  //     image: "https://picsum.photos/id/234/300/200",
  //     title: "Title2",
  //     content:
  //       "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     link: "#",
  //   },
  // ];

  // 泛型

  // const listItems = dataList.map((itemData, index) => (
  //   <ItemDetail2
  //     key={nanoid()}
  //     title={itemData.title}
  //     image={itemData.image}
  //     content={itemData.content}
  //     link={itemData.link}
  //   ></ItemDetail2>
  // ));
  // return (
  //   <>
  //     <div clasName="d-flex">{listItems}</div>
  //   </>
  // );
}

export default App;
