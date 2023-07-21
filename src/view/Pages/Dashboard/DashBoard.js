import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import { AiFillDelete } from "react-icons/ai";
import { FaFemale, FaMale } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPatientsRequest } from "../../store/patientActions";
import Sidebar from "../../components/Sidebar/Sidebar";
import DeleteModal from "../DeleteModal/DeleteModal";

const Dashboard = () => {
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.patients.error);
  const navigate = useNavigate();

  const fetchPatients = () => dispatch(fetchPatientsRequest());
  useEffect(() => {
    fetchPatients();
  }, []);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const openDeleteModal = (patientId) => {
    setSelectedPatientId(patientId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedPatientId(null);
    setShowDeleteModal(false);
  };

  const openPatientDetails = (patientId) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <div className="main-content">
          <div className="main-cards">
            {error && <p>Error :{error}</p>}
            {Array.isArray(patients) && patients.length > 0 ? (
              patients.map((patient) => (
                <div
                  className="sub-card"
                  key={patient.patientId}
                  id={`patient-${patient.patientId}`}
                  onClick={() => openPatientDetails(patient.patientId)}
                >
                  {patient.gender === "FEMALE" ? (
                    <FaFemale size={45} className="female-icon" />
                  ) : (
                    <FaMale size={45} className="male-icon" />
                  )}
                  <h3>{patient.fullName}</h3>
                  <div className="delete-icon">
                    <AiFillDelete
                      size={20}
                      onClick={(event) => {
                        event.stopPropagation();
                        openDeleteModal(patient.patientId);
                      }}
                    />
                  </div>
                  <div className="card-info">
                    <div className="left-info">
                      <p>Age: {patient.age}</p>
                      <p>Email: {patient.email}</p>
                    </div>
                    <div className="right-info">
                      <p>Contact: {patient.contactNumber}</p>
                      <p>Nationality: {patient.nationality}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No patients found.</p>
            )}
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          patientId={selectedPatientId}
          onCloseDeleteModal={closeDeleteModal}
        />
      )}
      <Footer />
    </>
  );
};

export default Dashboard;
