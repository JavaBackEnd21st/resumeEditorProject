import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to="/">Resume Editor</Link>
        </div>

        <ul className="navbar_menu">
          <li>
            <Link to="/main/resume">자소서 첨삭</Link>
          </li>
          <li>
            <Link to="/main/resumelist">자소서 목록</Link>
          </li>
          <li>
            <Link to="/main/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/">뭐라고하지</Link>
          </li>
          <li>
            <Link to="/">뭐라고할까</Link>
          </li>
        </ul>
        <ul className="navbar_links">
          <li>
            <Link to="/auth/login">로그인</Link>
          </li>
          <li>
            <Link to="/auth/signup">회원가입</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
