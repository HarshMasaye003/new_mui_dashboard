import React from "react";
import { Routes, Route } from "react-router";
import ServerPC from '../Layout/Mainboard/ServerPC'
import Documents from '../Layout/Mainboard/Documents'
import About from '../Layout/Mainboard/About'
import ClientsDashboard from "./Mainboard/ClientsDashboard";
import BrowserDashboard from "./Mainboard/BrowserDashboard";

const Mainboard = () => {
  return (
    <div className="h-full bg-bkg text-txt ">
      <Routes>
        <Route path="/" element={<ServerPC/>} />
        <Route path="/server" element={<ServerPC/>} />
        <Route path="/clients" element={<ClientsDashboard/>} />
        <Route path="/browse" element={<BrowserDashboard/>} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Documents />} />
      </Routes>
    </div>
  );
};

export default Mainboard;
