import React from "react";
import logo from "../../pictures/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg p-2"
      style={{ backgroundColor: "rgb(243, 222, 61)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            className="rounded"
            alt="image"
            width="40"
            height="35"
          />
        </a>
        <a className="navbar-brand fw-bold" href="#">
          BlockGames
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Games
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                More
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-row-reverse p-2" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ConnectWallet />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
