import { call } from "redux-saga/effects";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_PATH;

function* authorize() {
  let accessToken = yield call(getAccessToken);
  if (!accessToken) {
    accessToken = yield call(refreshAccessToken);
  }
  return accessToken;
}

function* getAccessToken() {
  const accessToken = sessionStorage.getItem("accessToken");
  return accessToken;
}

function* refreshAccessToken() {
  const refreshToken = sessionStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("Refresh token not found");
  }

  try {
    const response = yield call(axios.post, `${apiUrl}refresh-token`, {
      refreshToken,
    });
    const accessToken = response.data.accessToken;
    sessionStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    throw new Error("Failed to refresh access token");
  }
}

export { authorize };
