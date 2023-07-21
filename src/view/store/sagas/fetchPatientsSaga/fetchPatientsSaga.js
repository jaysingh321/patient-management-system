import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_PATIENTS_REQUEST } from "../../../constants/constants";
import {
  fetchPatientsSuccess,
  fetchPatientsFailure,
} from "../../patientActions";
import { authorize } from "../authorizationSaga/authorizationSaga";

const apiUrl = process.env.REACT_APP_API_PATH;

function* fetchPatientsSaga() {
  try {
    const response = yield call(axios.get, `${apiUrl}patients`);
    const patients = response.data.patients;
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
    yield call(authorize);
    yield put(fetchPatientsSuccess(patients));
  } catch (error) {
    yield put(fetchPatientsFailure(error.message));
  }
}

export function* fetchPatients() {
  yield takeEvery(FETCH_PATIENTS_REQUEST, fetchPatientsSaga);
}
