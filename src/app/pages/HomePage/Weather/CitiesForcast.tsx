import React from "react";

const Forecast = (props) => (
  <div className="weather_container">
    <div className="weather_title">
      <h1> {props.data.location ? props.data.location.name : ""} </h1>
      <p> {props.data.current ? props.data.current.condition.text : ""} </p>
    </div>
    <div className="weather_status">
      <ul>
        <li>
          Humidity :{" "}
          <span>{props.data.current ? props.data.current.humidity : ""}%</span>
        </li>
        <li>
          Wind :{" "}
          <span>{props.data.current ? props.data.current.temp_f : ""}km/s</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Forecast;
