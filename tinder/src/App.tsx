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
import { Spin } from "antd";

function App() {
  // const [list, setList] = useState(dataItems);
  const [cardList, setCardList] = useState<TData[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, [isFetch]);
  return (
    <>
      <Spin spinning={isLoading}>
        <Router>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/member"
              element={<Member cardList={cardList} setIsFetch={setIsFetch} />}
            />
            <Route path="/add" element={<AddCard setIsFetch={setIsFetch} />} />
            <Route
              path="/edit/:id"
              element={<EditCard cardList={cardList} setIsFetch={setIsFetch} />}
            />
            <Route index element={<Home cardList={cardList} />} />
          </Routes>
        </Router>
      </Spin>
    </>
  );
}

export default App;
