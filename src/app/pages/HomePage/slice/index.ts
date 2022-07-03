import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { LandingPageState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import landingPageSagas from './saga';

export const initialState: LandingPageState = {
  loading: false,
  lagosWeather: {},
  abujaWeather: {},
  londonWeather: {},
  parisWeather: {},
  losAngelesWeather: {},
  parisCurrentWeather: {},
  abujaCurrentWeather: {},
  losAngelesCurrentWeather: {},
  londonCurrentWeather: {},
  lagosCurrentWeather: {}
};

const slice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    
    fetchWeatherReportsSuccess: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.loading = false;
      state.error = undefined;
    },
    failedCall: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchLagostWeatherReports: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.lagosWeather = action.payload;
    },
    setCurrentWeatherForLagos: (state, action: PayloadAction<any>) => {
      state.lagosCurrentWeather = action.payload;
    },
    setCurrentWeatherForLondon: (state, action: PayloadAction<any>) => {
      state.londonCurrentWeather = action.payload;
    },
    setCurrentWeatherForAbuja: (state, action: PayloadAction<any>) => {
      state.abujaCurrentWeather = action.payload;
    },
    setCurrentWeatherForParis: (state, action: PayloadAction<any>) => {
      state.parisCurrentWeather = action.payload;
    },
    setCurrentWeatherForLA: (state, action: PayloadAction<any>) => {
      state.losAngelesCurrentWeather = action.payload;
    },
    fetchLosAngelesWeatherReports: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.abujaWeather = action.payload;
    },
    fetchParisWeatherReports: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.londonWeather = action.payload;
    },
    fetchLondonWeatherReports: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.parisWeather = action.payload;
    },
    fetchAbujaWeatherReports: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.losAngelesWeather = action.payload;
    },
    clearSuccessState: state => {
      state.success = false;
    },
    setLoadingState: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  },
});
export const { actions: landingPageActions } = slice;
export const useLandingPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: landingPageSagas });
  return { actions: slice.actions };
};
