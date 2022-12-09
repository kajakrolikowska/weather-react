import "./App.css";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Temperature from "./Temperature";
import Units from "./Units";
import Description from "./Description";
import Values from "./Values";
import CitySearch from "./CitySearch";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrap">
          <div className="weather-app">
            <Date />
            <Time />
            <br />
            <CitySearch />
            <br />
            <div className="row">
              <div className="col-8">
                <Location />
              </div>
              <div className="col-2 nopadding">
                <Temperature />
              </div>
              <div className="col-2 nopadding">
                <Units />
              </div>
              <div className="col-8">
                <Description />
              </div>
            </div>

            <hr />
            <br />
            <div className="row">
              <div className="col image">
                <img src={require("./images/icon.png")} alt="" />
              </div>
              <div className="col nopadding">
                <ul className="Definitions">
                  <li>Max | Min</li>
                  <li>Feels like</li>
                  <li>Wind</li>
                  <li>Humidity</li>
                  <li>Pressure</li>
                </ul>
              </div>
              <div className="col nopadding">
                <Values />
              </div>
            </div>
            <hr />
            <div className="Forecasts text-center">
              <strong>Forecasts placeholder</strong>
            </div>
            <hr />
          </div>
          <small className="footer">
            <a href="#">Open-source code</a>, by Kaja Królikowska
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
