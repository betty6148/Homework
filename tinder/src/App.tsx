import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import { useState } from "react";
import dataItems from "./data";
// import data from "./data";
// import { useState, useEffect } from "react";
// pre-build
// SCSS TailwindCss Linaria

//CSS Module React

// CSS-in-JS
// styled-component emotion

function App() {
  const [list, setList] = useState(dataItems);

  // console.log("⭐ ~ file: App.js:42 ~ App ~ CardDetail:", CardDetail);
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route
            path="/member"
            element={<Member list={list} setList={setList} />}
          />
          <Route
            path="/add"
            element={<AddCard list={list} setList={setList} />}
          />
          <Route path="/edit/:id" element={<EditCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
