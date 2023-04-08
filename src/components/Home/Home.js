import React from "react";
import "./Home.css";
import Header from "../Header/Header.js";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="home-background"></div>
      <main className="main">
        <h1 className="title">Blockchain Based Play 2 Earn Gaming </h1>
      </main>
    </>
  );
}

export default Home;
