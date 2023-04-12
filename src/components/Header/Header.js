import React from "react";
import logo from "../../pictures/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg p-2 header"
      style={{ backgroundColor: "rgb(243, 222, 61)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to={Home}></Link>
          <img
            src={logo}
            className="rounded"
            alt="logo"
            width="40"
            height="35"
          />
        </a>
        <a className="brand navbar-brand fw-bold">
          <Link to={Home} style={{ color: "black" }}>
            {"Block Games "}
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center p-2"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/games">
                Games
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/more">
                More
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-row-reverse p-2" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item connectwallet">
              <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
