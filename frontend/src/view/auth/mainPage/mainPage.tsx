import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import ResumeEdit from "./resumeEdit/resumeEdit";
import CustomFooter from "../../../components/footer";

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
