import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
