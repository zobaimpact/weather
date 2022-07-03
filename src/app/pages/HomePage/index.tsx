/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { MainView } from "app/layouts/MainView";
import CardComponent from "app/components/Cards";
import { Button } from "app/components/Button/Button";
import { customMedia } from "app/styles/media";
import { useLandingPageSlice } from "./slice/index";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Weather from "app/pages/HomePage/Weather";
import { StyleConstants } from "app/styles/StyleConstants";
// import { loadingSelector } from "./slice/selectors";
import { Loader } from "app/components/Loader/index";

export function HomePage() {
  const dispatch = useDispatch();
  const { actions } = useLandingPageSlice();
  // const loading = useSelector(loadingSelector);

  const [forecast, setForcast] = useState({
    term: "",
    city_name: "London",
    temp: "15",
    humidity: "24",
    wind: "2.5",
    weather_status: "Drizzle",
    weather_desc: "Light intensity drizzle",
    weather_icon: "",
  });

  const fetchLagosForecast = () => {
    const city = "Lagos";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLagostWeatherReports(requestPayload));
  };
  const fetchLosAngelesForecast = () => {
    const city = "Los Angeles";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLosAngelesWeatherReports(requestPayload));
  };
  const fetchAbujaForecast = () => {
    const city = "Abuja";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchAbujaWeatherReports(requestPayload));
  };
  const fetchParisForecast = () => {
    const city = "Paris";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchParisWeatherReports(requestPayload));
  };
  const fetchLondonForecast = () => {
    const city = "London";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLondonWeatherReports(requestPayload));
  };

  useEffect(() => {
    fetchLagosForecast();
    fetchLosAngelesForecast();
    fetchAbujaForecast();
    fetchParisForecast();
    fetchLondonForecast();
  }, [
    fetchAbujaForecast,
    fetchLagosForecast,
    fetchLondonForecast,
    fetchLosAngelesForecast,
    fetchParisForecast,
  ]);

  return (
    <Wrapper>
      <MainView>
        <CardComponent>
          <Weather data={forecast} />
        </CardComponent>
      </MainView>
      {/* <RenderHomepageContentsHere /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #cacaca;
`;
