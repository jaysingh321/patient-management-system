import React from "react";
import "./DeleteModal.scss";
import { useDispatch } from "react-redux";
import { deletePatientsRequest } from "../../store/patientActions";
import Button from "../../components/Button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteModal = ({ patientId, onCloseDeleteModal }) => {
  const dispatch = useDispatch();

  const handleDeletePatient = () => {
    dispatch(deletePatientsRequest(patientId));
    onCloseDeleteModal();
    toast.success("Patient deleted successfully!");
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2>Confirm Deletion</h2>
        <div className="delete-modal-container"></div>
        <p>Are you sure you want to delete this patient?</p>

        <Button
          name="Yes"
          className="button button--secondaryButton"
          onClick={handleDeletePatient}
        />
        <Button
          name="No"
          className="button button--secondaryButton"
          onClick={onCloseDeleteModal}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteModal;
