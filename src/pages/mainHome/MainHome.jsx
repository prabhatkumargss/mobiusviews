import React, { useState, useEffect } from "react";
import AnalyticsDashboard from "../../pages/analyticsdashboard/analyticsdashboard";
import Header from "../../pages/header/header";
import Home from "../../pages/home/home";
import ReachOut from "../../pages/reachout/reachOut";
import CookieConsent from "../../component/CookieConsent";
import ServicesSection from "../../component/ServicesSection";
import Stepper from "../../component/Stepper";

function MainHome() {
  return (
    <>
        <Home />
        <AnalyticsDashboard />
        <ServicesSection />
        <CookieConsent />
        <ReachOut />
        {/* <Stepper /> */}

    </>
  );
}

export default MainHome;


