import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./PatientDetails.scss";
import EditPatient from "../edit/EditPatient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientByIdRequest } from "../../../store/patientActions";

const PatientDetails = () => {
  const patient = useSelector((state) => state.patients.patient);
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const { patientId } = useParams();
  const error = useSelector((state) => state.patients.error);

  const fetchPatient = () => dispatch(fetchPatientByIdRequest(patientId));
  useEffect(() => {
    fetchPatient();
  }, []);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <Header />
      <Sidebar />

      <div className="centered-text">
        <h2>Patients Details</h2>
      </div>
      {error && <p className="cards-container">Error :{error}</p>}
      {patient && (
        <div className="cards-container">
          <div className="left-card">
            <div className="flip-container">
              <div className="flipper">
                <div className="front">
                  <div className="avatar">
                    <div
                      className={`avatar ${
                        patient.gender === "MALE"
                          ? "male-color"
                          : "female-color"
                      }`}
                    >
                      <FaUserAlt size={200} />
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h2>{patient.fullName}</h2>
                  <p>Age : {patient.age} </p>
                  <p>Date Of Birth : {patient.dateOfBirth} </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-card">
            <div className="right-card-container">
              <div className="right-card-heading">
                <p>Contact</p>
                <p>Email</p>
                <p>Address </p>
                <p>Gender </p>
                <p>Nationality </p>
              </div>

              <div className="rigt-card-sub">
                <p>{patient.contactNumber} </p>
                <p>{patient.email}</p>
                <p>#23 building no.9 BGL</p>
                <p>{patient.gender}</p>
                <p>{patient.nationality}</p>
              </div>
            </div>

            <div className="edit-button">
              <FaEdit size={20} onClick={() => openEditModal()} />
              <br />
              Edit
            </div>
          </div>
        </div>
      )}

      {!patient && <p>No patient found.</p>}

      <Footer />
      {showEditModal && (
        <EditPatient patient={patient} onCloseEditModal={closeEditModal} />
      )}
    </>
  );
};

export default PatientDetails;
