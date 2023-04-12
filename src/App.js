import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Games from "./components/Games/Games";
import About from "./components/About/About";
import More from "./components/More/More";
import Header from "./components/Header/Header";
import Game1 from "./components/Games/Games/Game1";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameNumber" element={<Game1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
