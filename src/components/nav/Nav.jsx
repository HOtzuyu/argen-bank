import React from "react";
import logo from "../../assets/logo_argent-bank.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserLogin, selectUser } from "../../utils/redux/selectors";
import { logOut } from "../../utils/redux/reducers";

function Nav() {
  const dispatch = useDispatch();
  const isUserLogIn = useSelector(selectUserLogin);
  const user = useSelector(selectUser);

  return (
    <nav className="main-nav">
      <Link
        className="main-nav-logo"
        to="/"
      >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isUserLogIn ? (
          <Link
            className="main-nav-item"
            to="/signin"
          >
            <i className="fa fa-user-circle"></i>
            <span> Sign In</span>
          </Link>
        ) : (
          <div>
            <Link
              className="main-nav-item"
              to="/signin"
            >
              <i className="fa fa-user-circle"></i>
              <span> {user.firstName}</span>
            </Link>
            <Link
              className="main-nav-item"
              to="/"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              <span onClick={() => dispatch(logOut())}> Sign Out</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
