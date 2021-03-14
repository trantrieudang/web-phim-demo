import React from "react";
import { Link } from "react-router-dom";
import webLogo from "../../assets/images/logo-web-phim.png";
import avatarPic from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../containers/AuthLayout/userSlice";

export default function NavbarHome() {
  
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.userReducer.current);
  const isLoggedIn = !!loggedInUser.taiKhoan;

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <header className="header">
      <div className="header__content d-flex">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img className="webLogo" src={webLogo} alt={webLogo} />
            <span className="webName">Banana Ticket</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/#filmList_Link">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#showTime_Link">
                  Cụm Rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#new_Link">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#app_Link">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>

          {!isLoggedIn && (
            <div className="right" >
              <div className="rightFirst">
                <Link className="titleDisplay" to="/login">
                  <span className="titleLogin">Đăng nhập</span>
                </Link>
              </div>
              <div className="rightSecond">
                <Link className="titleDisplay" to="/register">
                  <span className="titleRegister">Đăng ký</span>
                </Link>
              </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="right" >
              <div className="rightFirst">
                <img className="imgAccount" src={avatarPic} alt={avatarPic} />

                <span className="titleLogin">{loggedInUser.taiKhoan}</span>
              </div>
              <div className="rightSecond">
                <Link
                  className="titleDisplay"
                  to="/"
                  onClick={handleLogoutClick}
                >
                  <span className="titleLogOut">Đăng thoát</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
