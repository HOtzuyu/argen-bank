import React from "react";
import Logo from "../../assets/logo_argent-bank.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, fetchUserData } from "../../services/actions";
import { selectUser } from "../../feature/selector";

function Nav() {
  // Récupération des données de l'utilisateur via hook useSelector
  const userData = useSelector(selectUser);
  // Récupération du token dans le localStorage ou sessionStorage
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  // Récupération de l'état de "se souvenir de moi" dans le localStorage
  const isRemembered = localStorage.getItem("isRemembered");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * clearStorage - Fonction de nettoyage du localStorage et sessionStorage et de la déconnexion de l'utilisateur
   *
   * @returns {void}
   */
  function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
    return dispatch(signOut());
  }

  /**
   * remember - Fonction de gestion de l'état "se souvenir de moi"
   *
   * @returns {void}
   */
  function remember() {
    if (isRemembered) {
      dispatch(fetchUserData(token));
      navigate("/user");
    } else {
      navigate("/sign-in");
    }
  }

  // Rendu conditionnel du header en fonction de la présence d'un token et de données de l'utilisateur
  return token && userData.data ? (
    <nav className="main-nav">
      <Link
        to="/"
        className="main-nav-logo"
      >
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link
          to="/login"
          className="main-nav-item"
        >
          <i className="fa fa-user-circle"></i>
          {userData.data.firstName}
        </Link>
        <Link
          to="/"
          onClick={clearStorage}
          className="main-nav-item"
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="main-nav">
      <Link
        to="/"
        className="main-nav-logo"
      >
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div
        onClick={remember}
        className="main-nav-item"
      >
        <i className="fa fa-user-circle"></i>
        Sign In
      </div>
    </nav>
  );
}

export default Nav;
