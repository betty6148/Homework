import Card from "./pages/Card";
// import "./App.css";
import "./page_style/card.css";
import "./page_style/login.css";
// import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./pages/LogIn";

// pre-build
// SCSS TailwindCss Linaria

//CSS Module React

// CSS-in-JS
// styled-component emotion

function App() {
  return (
    <>
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
