// Games.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Games = () => {
  return (
    <div className="h-100">
      <div className="row h-100">
        <div className="col-xl-2" style={{ backgroundColor: "#224e60" }}></div>
        <div className="orta col-xl-8" style={{ backgroundColor: "#0d4156" }}>
          <div className="row">
            <div className="col-xl-2"></div>
            <div className="col-xl-8 gri-kare"></div>
            <div className="col-xl-2"></div>
          </div>
          <h1 className="text-center mt-4 baslik">High Scores</h1>
          <div className="row">
            <div className="col-xl-2"></div>
            <div className="col-xl-8">
              <table
                className="table high-scores-table"
                style={{ backgroundColor: "black" }}
              >
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Score</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1st</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>2nd</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>3rd</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>4th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>5th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>5th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>7th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>8th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>9th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                  <tr>
                    <td>10th</td>
                    <td>1000</td>
                    <td>Orn</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-xl-2"></div>
          </div>
        </div>
        <div className="col-xl-2" style={{ backgroundColor: "#224e60" }}></div>
      </div>
    </div>
  );
};

export default Games;
