import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { DELETE_PATIENT_REQUEST } from "../../../constants/constants";
import {
  deletePatientsFailure,
  deletePatientsSuccess,
  fetchPatientsRequest,
} from "../../patientActions";
import { authorize } from "../authorizationSaga/authorizationSaga";

const apiUrl = process.env.REACT_APP_API_PATH;

function* deletePatientSaga(action) {
  try {
    const accessToken = yield call(authorize);
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = yield call(
      axios.delete,
      `${apiUrl}patients?patientId=${action.payload}`,
      { headers }
    );

    if (response.status === 200) {
      yield put(deletePatientsSuccess(action.payload));
      yield put(fetchPatientsRequest());
    } else {
      yield put(deletePatientsFailure("Error deleting user"));
    }
  } catch (error) {
    yield put(deletePatientsFailure(error.message));
  }
}

export function* deletePatient() {
  yield takeEvery(DELETE_PATIENT_REQUEST, deletePatientSaga);
}
