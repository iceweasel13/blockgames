import React from "react";
import "./Games.css";
import "bootstrap/dist/css/bootstrap.min.css";
import game from "../../pictures/game.png";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();

  const handleButtonClick = (gameNumber) => {
    navigate(`/games/${gameNumber}`);
  };

  return (
    <div className="h-100">
      <div className="row h-100">
        <div className="col-2 bg-primary sol">ADS alanı</div>

        <div className="col-8 bg-secondary orta">
          {/* Game start */}
          <div className="container text-center justify-content-center pt-2">
            <div className="row row-cols-3">
              {[...Array(9)].map((_, index) => (
                <div className="col my-5" key={index}>
                  <div className="game-thumbnail">
                    <img src={game} alt="" className="game-image" />
                    <div className="game-overlay">
                      <button
                        className="game-play-btn"
                        onClick={() => handleButtonClick(index + 1)}
                      >
                        Play
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Game end */}
        </div>

        <div className="col-2 bg-primary sag">ADS alanı</div>
      </div>
    </div>
  );
}

export default Games;
