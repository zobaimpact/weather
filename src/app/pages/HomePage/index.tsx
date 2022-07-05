/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, memo } from "react";
import styled from "styled-components/macro";
// import { customMedia } from "app/styles/media";
import { useLandingPageSlice } from "./slice/index";
import { useDispatch, useSelector } from "react-redux";
import Forecast from "app/pages/HomePage/Weather/CitiesForcast";
import {
  loadingSelector,
  lagosWeatherSelector,
  abujaWeatherSelector,
  londonWeatherSelector,
  parisWeatherSelector,
  laWeatherSelector,
  // lagosCurrentWeatherSelector,
  // abujaCurrentWeatherSelector,
  // londonCurrentWeatherSelector,
  // parisCurrentWeatherSelector,
  // laCurrentWeatherSelector,
  // userCurrentWeatherSelector,
} from "./slice/selectors";
import { Loader } from "app/components/Loader/index";
import { Search } from "./Weather/Search";
import { MainView } from "app/layouts/MainView";

export const HomePage = memo(() => {
  const dispatch = useDispatch();
  const { actions } = useLandingPageSlice();
  const [isViewAll, setIsViewAll] = useState<boolean>(false);
  const loading = useSelector(loadingSelector);
  const lagosWeatherForecast = useSelector(lagosWeatherSelector);
  const abujaWeatherForcast = useSelector(abujaWeatherSelector);
  const londonWeatherForcast = useSelector(londonWeatherSelector);
  const parisWeatherForcast = useSelector(parisWeatherSelector);
  const laWeatherForcast = useSelector(laWeatherSelector);

  // const lagosCurrentWeatherForecast = useSelector(lagosCurrentWeatherSelector);
  // const abujaCurrentWeatherForcast = useSelector(abujaCurrentWeatherSelector);
  // const londonCurrentWeatherForcast = useSelector(londonCurrentWeatherSelector);
  // const parisCurrentWeatherForcast = useSelector(parisCurrentWeatherSelector);
  // const laCurrentWeatherForcast = useSelector(laCurrentWeatherSelector);

  // const userLocationCurrentForcast = useSelector(userCurrentWeatherSelector);

  // const currentWeatherForecast = [
  //   lagosCurrentWeatherForecast,
  //   abujaCurrentWeatherForcast,
  //   londonCurrentWeatherForcast,
  //   parisCurrentWeatherForcast,
  //   laCurrentWeatherForcast,
  // ];

  const allWeatherForecast = [
    lagosWeatherForecast,
    abujaWeatherForcast,
    londonWeatherForcast,
    parisWeatherForcast,
    laWeatherForcast,
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const requestPayload = { lat, lon };
      dispatch(actions.getUsertWeatherReports(requestPayload));
    });
  }, [actions, dispatch]);

  const fetchLagosForecast = useCallback(() => {
    const city = "Lagos";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLagostWeatherReports(requestPayload));
  }, []);

  const toggleViewAll = () => {
    setIsViewAll(!isViewAll);
  };

  const fetchLosAngelesForecast = useCallback(() => {
    const city = "Los Angeles";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLosAngelesWeatherReports(requestPayload));
  }, []);

  const fetchAbujaForecast = useCallback(() => {
    const city = "Abuja";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchAbujaWeatherReports(requestPayload));
  }, []);

  const fetchParisForecast = useCallback(() => {
    const city = "Paris";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchParisWeatherReports(requestPayload));
  }, []);

  const fetchLondonForecast = useCallback(() => {
    const city = "London";
    const duration = 4;
    const requestPayload = { city, duration };
    dispatch(actions.fetchLondonWeatherReports(requestPayload));
  }, []);

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

  if (loading) return <Loader />;

  return (
    <MainView>
      <Wrapper>
        <Main>
          <Search handleViewAll={toggleViewAll} isViewAll={isViewAll} />
          {isViewAll === true ? (
            <Container>
              {allWeatherForecast
                ? allWeatherForecast.map((weather) => (
                    <Forecast data={weather} />
                  ))
                : ""}
            </Container>
          ) : (
            ""
          )}
        </Main>
      </Wrapper>
    </MainView>
  );
});

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Container = styled.div`
  width: 70%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding-bottom: 1rem;
  overflow-x: hidden;
  grid-gap: 1rem;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;
