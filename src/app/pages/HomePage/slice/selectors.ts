import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";
import { RootState } from "../../../../types/RootState";

const selectSlice = (state: RootState) => state.landingPage || initialState;
export const landingPageSelectors = () => {
  const loadingSelector = createSelector(
    [selectSlice],
    (landingPage) => landingPage.loading
  );

  const selectLoading = createSelector([selectSlice], (state) => state.loading);
  const lagosWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.lagosWeather
  );
  const abujaWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.abujaWeather
  );
  const londonWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.londonWeather
  );
  const parisWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.parisWeather
  );
  const laWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.losAngelesWeather
  );
  const lagosCurrentWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.lagosCurrentWeather
  );
  const abujaCurrentWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.abujaCurrentWeather
  );
  const londonCurrentWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.londonCurrentWeather
  );
  const parisCurrentWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.parisCurrentWeather
  );
  const laCurrentWeatherSelector = createSelector(
    [selectSlice],
    (state) => state.losAngelesCurrentWeather
  );

  const selectSuccessState = createSelector(
    [selectSlice],
    (state) => state.success
  );
  const selectError = createSelector([selectSlice], (state) => state.error);

  return {
    selectLoading,
    selectSuccessState,
    selectError,
    loadingSelector,
  };
};
