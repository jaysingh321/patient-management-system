import { all } from "redux-saga/effects";
import { fetchPatients } from "./fetchPatientsSaga/fetchPatientsSaga";
import { createPatients } from "./createPatientsSaga/createPatientsSaga";
import { deletePatient } from "./deletePatientsSaga/deletePatientsSaga";
import { updatePatient } from "./updatePatientsSaga/updatePatientsSaga";
import { fetchPatientById } from "./fetchPatientByIdSaga/fetchPatientByIdSaga";

function* rootSaga() {
  yield all([
    fetchPatients(),
    createPatients(),
    deletePatient(),
    updatePatient(),
    fetchPatientById(),
  ]);
}

export default rootSaga;
