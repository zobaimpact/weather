import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";
import { RootState } from "../../../../types/RootState";

const selector = (state: RootState) => state.landingPage || initialState;
export const loadingSelector = createSelector(
  [selector],
  (landingPage) => landingPage.loading
);

export const selectLoading = createSelector(
  [selector],
  (state) => state.loading
);
export const userCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.userLocationForecast
);
export const lagosWeatherSelector = createSelector(
  [selector],
  (state) => state.lagosWeather
);
export const abujaWeatherSelector = createSelector(
  [selector],
  (state) => state.abujaWeather
);
export const londonWeatherSelector = createSelector(
  [selector],
  (state) => state.londonWeather
);
export const parisWeatherSelector = createSelector(
  [selector],
  (state) => state.parisWeather
);
export const laWeatherSelector = createSelector(
  [selector],
  (state) => state.losAngelesWeather
);
export const lagosCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.lagosCurrentWeather
);
export const abujaCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.abujaCurrentWeather
);
export const londonCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.londonCurrentWeather
);
export const parisCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.parisCurrentWeather
);
export const laCurrentWeatherSelector = createSelector(
  [selector],
  (state) => state.losAngelesCurrentWeather
);

export const selectSuccessState = createSelector(
  [selector],
  (state) => state.success
);
export const selectError = createSelector([selector], (state) => state.error);
