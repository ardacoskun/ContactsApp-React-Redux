import React from "react";
import Contacts from "./components/Contacts";
import { Routes, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

const App = () => {
  return (
    <div className="app">
      <div id="container">
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
