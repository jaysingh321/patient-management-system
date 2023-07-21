import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPatientByIdFailure,
  fetchPatientByIdSuccess,
  fetchPatientsRequest,
} from "../../patientActions";
import { FETCH_PATIENT_BY_ID_REQUEST } from "../../../constants/constants";
import { authorize } from "../authorizationSaga/authorizationSaga";

const apiUrl = process.env.REACT_APP_API_PATH;

function* fetchPatientByIdSaga(action) {
  try {
    const accessToken = yield call(authorize);
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = yield call(
      axios.get,
      `${apiUrl}patientsbyid?patientId=${action.payload}`,
      { headers }
    );

    if (response.status === 200) {
      yield put(fetchPatientByIdSuccess(response.data));
      yield put(fetchPatientsRequest());
    } else {
      yield put(fetchPatientByIdFailure("Error fetching the  Patient"));
    }
  } catch (error) {
    yield put(fetchPatientByIdFailure(error.message));
  }
}

export function* fetchPatientById() {
  yield takeEvery(FETCH_PATIENT_BY_ID_REQUEST, fetchPatientByIdSaga);
}
