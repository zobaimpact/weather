import React, { useState } from "react";
import config from '../../../config';
import axios from "axios";
import styled from 'styled-components/macro';

// Components
import Form from "./Form";
import Weather from ".";
import "./Weather.css";
import { Button } from "reactstrap";

export const Search = ({handleViewAll, isViewAll}) => {

  const [state, setState] = useState({
    term: "",
    city_name: "Egypt",
    temp: "15",
    humidity: "24",
    wind: "2.5",
    weather_status: "Drizzle",
    weather_desc: "Light intensity drizzle",
    weather_icon: "",
  });

  const handleChange = (e) => {
    setState({
      term: e.target.value
    });
  };

  const handleClick = (e) => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          state.term +
          "&units=metric&appid=" +
          config.API_KEY_2
      )
      .then((res) => {
        setState({
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidty: res.data.main.humidity,
          wind: res.data.wind.speed,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="header">Weather App</h1>
      <Form onChange={handleChange} onClick={handleClick} />
        <Weather data={state} />
        <ButtonCta onClick={() => handleViewAll()}>{isViewAll === true ? 'Hide all forecast' : 'See all forecast'}</ButtonCta>
    </div>
  );
};

const ButtonCta = styled(Button)`
  border: none;
  background: transparent;
  margin-top: 1rem;
  width: 100%;
  color: #000000;
`;
