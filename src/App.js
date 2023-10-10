import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
