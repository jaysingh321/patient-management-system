import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { CREATE_PATIENT_REQUEST } from "../../../constants/constants";
import {
  createPatientsSuccess,
  createPatientsFailure,
  fetchPatientsRequest,
} from "../../patientActions";
import { authorize } from "../authorizationSaga/authorizationSaga";

const apiUrl = process.env.REACT_APP_API_PATH;

function* createPatientSaga(action) {
  try {
    const accessToken = yield call(authorize);
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = yield call(
      axios.post,
      `${apiUrl}patients`,
      action.payload,
      { headers }
    );
    if (response.status === 201) {
      yield put(fetchPatientsRequest());
      yield put(createPatientsSuccess());
    } else {
      yield put(createPatientsFailure("Error creating user"));
    }
  } catch (error) {
    yield put(createPatientsFailure(error.message));
  }
}

export function* createPatients() {
  yield takeEvery(CREATE_PATIENT_REQUEST, createPatientSaga);
}
