import { takeLatest, call, put, delay, all } from "redux-saga/effects";
import config from "../../../config";
import { apiCall } from "../../../../utils/axios";
import { toast } from "react-toastify";
import { landingPageActions } from ".";

function* fetchLagosWeatherReports(data) {
  const { city, duration } = data.payload;

  console.log("Called");
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );
    const currentForecast = yield call(
      apiCall,
      "GET",
      `/current.json?key=${config.API_KEY}&q=${city}&aqi=no&alerts=no`
    );

    if (res.status === 200 && currentForecast.status === 200) {
      yield put(landingPageActions.setLoadingState(false));
      yield put(landingPageActions.setCurrentWeatherForLagos(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchLosAngelesWeatherReports(data) {
  const { city, duration } = data.payload;

  console.log("Called");
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );
    const currentForecast = yield call(
      apiCall,
      "GET",
      `/current.json?key=${config.API_KEY}&q=${city}&aqi=no&alerts=no`
    );
    if (res.status === 200 && currentForecast.status === 200) {
      yield put(landingPageActions.setLoadingState(false));
      yield put(landingPageActions.fetchLosAngelesWeatherReports(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchParisWeatherReports(data) {
  const { city, duration } = data.payload;

  console.log("Called");
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );
    const currentForecast = yield call(
      apiCall,
      "GET",
      `/current.json?key=${config.API_KEY}&q=${city}&aqi=no&alerts=no`
    );
    if (res.status === 200 && currentForecast.status === 200) {
      yield put(landingPageActions.setLoadingState(false));
      yield put(landingPageActions.setCurrentWeatherForParis(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchLondonWeatherReports(data) {
  const { city, duration } = data.payload;

  console.log("Called");
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );
    const currentForecast = yield call(
      apiCall,
      "GET",
      `/current.json?key=${config.API_KEY}&q=${city}&aqi=no&alerts=no`
    );
    if (res.status === 200 && currentForecast.status === 200) {
      yield put(landingPageActions.setLoadingState(false));
      yield put(landingPageActions.setCurrentWeatherForLondon(res.data));
    }
  } catch (err) {
    toast.error(`${err} || 'Something went wrong`);
    yield put(landingPageActions.setLoadingState(false));
  }
}
function* fetchAbujaWeatherReports(data) {
  const { city, duration } = data.payload;

  console.log("Called");
  try {
    yield delay(500);
    const res = yield call(
      apiCall,
      "GET",
      `/forecast.json?key=${config.API_KEY}&q=${city}&days=${duration}&aqi=no&alerts=no`
    );
    const currentForecast = yield call(
      apiCall,
      "GET",
      `/current.json?key=${config.API_KEY}&q=${city}&aqi=no&alerts=no`
    );
    if (res.status === 200 && currentForecast.status === 200) {
      yield put(landingPageActions.setLoadingState(false));
      yield put(landingPageActions.setCurrentWeatherForAbuja(res.data));
    }
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
