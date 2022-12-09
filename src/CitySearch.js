import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
  return (
    <form id="city-search">
      <div className="row search-eng">
        <div className="col-8">
          <input
            id="city-input"
            type="text"
            className="form-control"
            placeholder=" 🔍 What is the weather in...?"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="check col">
            Check
          </button>
        </div>
        <div className="col">
          <button type="button" className="location">
            📍
          </button>
        </div>
      </div>
    </form>
  );
}
