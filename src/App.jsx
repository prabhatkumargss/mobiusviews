import React, { useState, useEffect } from "react";
import MainHome from "./pages/mainHome/MainHome";
import { Routes, Route } from "react-router-dom";
import CustomDashboard from "./pages/services/CustomDashboard";
import CustomChart from "./pages/services/CustomChart";
import Header from "./pages/header/header";
import ServicesComponent from "./pages/services/ServicesComponent";


function App() {
  return (

    <div className="flex justify-center items-start min-h-screen w-full">
      <div className=" w-full rounded-lg">
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/home" element={<MainHome />} />
          <Route path="/services/customDashboard" element={<CustomDashboard />} />
          <Route path="/services/customChart" element={<CustomChart />} />
        </Routes>
      </div>
    </div>

    // <MainHome />
  );
}

export default App;

