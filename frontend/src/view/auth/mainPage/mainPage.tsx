import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import ResumeEdit from "./resumeEdit/resumeEdit";
import CustomFooter from "../../../components/footer";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <CustomFooter />
    </div>
  );
};

export default MainPage;
