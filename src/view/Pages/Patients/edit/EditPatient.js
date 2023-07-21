import React, { useState } from "react";
import UserForm from "../../../components/Form/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { updatePatientsRequest } from "../../../store/patientActions";
import { fetchPatientByIdSuccess } from "../../../store/patientActions";

const EditPatient = ({ patient, onCloseEditModal }) => {
  const [showEditModal, setShowEditModal] = useState(true);

  const dispatch = useDispatch();
  const previousPatientData = useSelector((state) => state.patients.patient);
  const error = useSelector((state) => state.patients.error);

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleUpdatePatient = (updatedData) => {
    const updatedPatientData = {
      ...patient,
      ...updatedData,
    };

    dispatch(updatePatientsRequest(patient.patientId, updatedPatientData));
    dispatch(fetchPatientByIdSuccess(updatedPatientData));
    closeEditModal();
  };

  return (
    <>
      {error && <p>Error :{error}</p>}
      {showEditModal && (
        <UserForm
          onSubmit={handleUpdatePatient}
          user={previousPatientData}
          onCancel={onCloseEditModal}
        />
      )}
    </>
  );
};

export default EditPatient;
