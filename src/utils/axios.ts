import axios from "axios";
import config from "app/config";
const token = "";

/**
 * Create an Axios Client with defaults
 */

const client = axios.create({
  baseURL: `${config.Urls.baseUrl}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

/* Api call without default toast */

const axiosInstanceNoDefaultToast = axios.create({
  baseURL: `${config.Urls.baseUrl}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const apiCall = function (
  method,
  route,
  body = {},
  token = "",
  contentType = ""
) {
  const onSuccess = function (response) {
    console.debug("Request Successful!", response);
    return response;
  };

  const onError = function (error) {
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }

    return error.response;
  };

  if (token !== "") {
    axiosInstanceNoDefaultToast.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  if (contentType !== "") {
    axiosInstanceNoDefaultToast.defaults.headers.common["Content-Type"] =
      contentType;
  }

  return axiosInstanceNoDefaultToast({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};

export default client;
