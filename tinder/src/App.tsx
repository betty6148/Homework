import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Member from "./pages/Member";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import { useState } from "react";
import dataItems from "./data";

function App() {
  const [list, setList] = useState(dataItems);

  return (
    <>
      <Router>
        <Routes>
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
          <Route index element={<Home list={list} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
