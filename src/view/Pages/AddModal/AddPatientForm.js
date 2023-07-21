import React, { useState } from "react";
import UserForm from "../../components/Form/UserForm";
import { createPatientsRequest } from "../../store/patientActions";
import { useDispatch } from "react-redux";

const AddPatientForm = ({ onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const handleSubmit = (formData) => {
    dispatch(createPatientsRequest(formData));
  };

  return <UserForm onSubmit={handleSubmit} onCancel={onClose} />;
};

export default AddPatientForm;
