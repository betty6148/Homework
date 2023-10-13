import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import { useState, useEffect } from "react";
// import dataItems from "./data";
import { TData } from "./types";
import axios from "axios";
import { API_URL, TOKEN } from "./utils";

function App() {
  // const [list, setList] = useState(dataItems);
  const [cardList, setCardList] = useState<TData[]>([]);
  // console.log("⭐ ~ file: App.tsx:17 ~ App ~ cardList:", cardList);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cards`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        params: {
          populate: "image",
        },
      })
      .then((response) => {
        setCardList(response?.data?.data || []);
      });
  }, []);
  return (
    <>
      {cardList ? (
        <Router>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/member"
              element={<Member cardList={cardList} setCardList={setCardList} />}
            />
            <Route
              path="/add"
              element={
                <AddCard cardList={cardList} setCardList={setCardList} />
              }
            />
            <Route
              path="/edit/:id"
              element={<EditCard cardList={cardList} />}
            />
            <Route index element={<Home cardList={cardList} />} />
          </Routes>
        </Router>
      ) : (
        <p>isLoading...</p>
      )}
    </>
  );
}

export default App;
