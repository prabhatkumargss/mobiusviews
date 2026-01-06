import React, { useState, useEffect } from "react";
import MainHome from "./pages/mainHome/MainHome";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/services/services";
import Header from "./pages/header/header";


function App() {
  return (

     <div className="flex justify-center items-start min-h-screen w-full">
      <div className=" w-full rounded-lg">
        <Header />
     <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/services/:id" element={<Services/>} />
    </Routes>
      </div>
    </div>

    // <MainHome />
  );
}

export default App;

