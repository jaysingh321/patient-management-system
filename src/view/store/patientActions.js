import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_FAILURE,
  CREATE_PATIENT_SUCCESS,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_SUCCESS,
  DELETE_PATIENT_FAILURE,
  UPDATE_PATIENT_REQUEST,
  UPDATE_PATIENT_FAILURE,
  UPDATE_PATIENT_SUCCESS,
  FETCH_PATIENT_BY_ID_REQUEST,
  FETCH_PATIENT_BY_ID_SUCCESS,
  FETCH_PATIENT_BY_ID_FAILURE,
} from "../constants/constants";

export const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});

export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const createPatientsRequest = (patientsData) => ({
  type: CREATE_PATIENT_REQUEST,
  payload: patientsData,
});

export const createPatientsSuccess = (patients) => ({
  type: CREATE_PATIENT_SUCCESS,
  payload: patients,
});
export const createPatientsFailure = (error) => ({
  type: CREATE_PATIENT_FAILURE,
  payload: error,
});

export const deletePatientsRequest = (patientId) => ({
  type: DELETE_PATIENT_REQUEST,
  payload: patientId,
});

export const deletePatientsSuccess = (patientId) => ({
  type: DELETE_PATIENT_SUCCESS,
  payload: patientId,
});

export const deletePatientsFailure = (error) => ({
  type: DELETE_PATIENT_FAILURE,
  payload: error,
});

export const updatePatientsRequest = (patientId, patientData) => ({
  type: UPDATE_PATIENT_REQUEST,
  payload: {
    patientId,
    patientData,
  },
});

export const updatePatientsSuccess = (patientId) => ({
  type: UPDATE_PATIENT_SUCCESS,
  payload: patientId,
});

export const updatePatientsFailure = (error) => ({
  type: UPDATE_PATIENT_FAILURE,
  payload: error,
});
export const fetchPatientByIdRequest = (patientId) => ({
  type: FETCH_PATIENT_BY_ID_REQUEST,
  payload: patientId,
});

export const fetchPatientByIdSuccess = (patient) => ({
  type: FETCH_PATIENT_BY_ID_SUCCESS,
  payload: patient,
});

export const fetchPatientByIdFailure = (error) => ({
  type: FETCH_PATIENT_BY_ID_FAILURE,
  payload: error,
});
