import React from "react";
import "./Values.css";

export default function Values() {
  return (
    <ul className="Values">
      <li>
        18°C | <span className="min">12°C</span>
      </li>
      <li>15°C</li>
      <li>4 km/h</li>
      <li>86%</li>
      <li>1007 hPa</li>
    </ul>
  );
}
