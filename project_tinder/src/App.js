import Card from "./pages/Card";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      {/* <Link to="/login">LogIn</Link> */}

      <Router>
        <Routes>
          <Route index element={<Card />} />

          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
