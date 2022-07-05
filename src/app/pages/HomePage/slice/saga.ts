import { takeLatest, call, put, delay, all } from "redux-saga/effects";
import config from "../../../config";
import { apiCall } from "../../../../utils/axios";
import { toast } from "react-toastify";
import { landingPageActions } from ".";

function* fetchLagosWeatherReports(data) {
  const { city, duration } = data.payload;
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );

    if (res.status === 200) {
      yield put(landingPageActions.setWeatherForLagos(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchLosAngelesWeatherReports(data) {
  const { city, duration } = data.payload;

  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );

    if (res.status === 200) {
      yield put(landingPageActions.setWeatherForLA(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchParisWeatherReports(data) {
  const { city, duration } = data.payload;

  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );

    if (res.status === 200) {
      yield put(landingPageActions.setWeatherForParis(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchLondonWeatherReports(data) {
  const { city, duration } = data.payload;

  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );

    if (res.status === 200) {
      yield put(landingPageActions.setWeatherForLondon(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}

function* fetchAbujaWeatherReports(data) {
  const { city, duration } = data.payload;

  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );

    if (res.status === 200) {
      yield put(landingPageActions.setWeatherForAbuja(res.data));
    }

    yield put(landingPageActions.setLoadingState(false));
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(
      landingPageActions.fetchLagostWeatherReports.type,
      fetchLagosWeatherReports
    ),
    takeLatest(
      landingPageActions.fetchLosAngelesWeatherReports.type,
      fetchLosAngelesWeatherReports
    ),
    takeLatest(
      landingPageActions.fetchParisWeatherReports.type,
      fetchParisWeatherReports
    ),
    takeLatest(
      landingPageActions.fetchLondonWeatherReports.type,
      fetchLondonWeatherReports
    ),
    takeLatest(
      landingPageActions.fetchAbujaWeatherReports.type,
      fetchAbujaWeatherReports
    ),
  ]);
}
