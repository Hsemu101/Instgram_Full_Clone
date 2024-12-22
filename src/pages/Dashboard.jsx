import React, { useContext } from "react";
import AuthListnerContext from "../context/UserAuthContext";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Sidebar from "../components/sidebar";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-4  ">
        <Timeline className="" />

        <Sidebar className="" />
      </div>
    </div>
  );
}

export default Dashboard;


