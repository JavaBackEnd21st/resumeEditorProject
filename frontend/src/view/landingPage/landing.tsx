import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      랜딩 페이지 입니다!
      <Link to="/main" style={{ color: "black" }}>
        메인으로 이동
      </Link>
    </div>
  );
};

export default LandingPage;
