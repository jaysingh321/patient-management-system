import React, { useState } from "react";
import { FaUsers, FaBars } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import CustomCalendar from "../Calendar/CustomCalendar";
import AddPatientForm from "../../Pages/AddModal/AddPatientForm";
import "./sidebar.scss";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddPatient, setIsAddPatient] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAddModalClose = () => {
    setIsAddPatient(false);
  };
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="main-container">
        <div className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="sidebar-header">
            <div className="sidebar-icon">
              <FaBars size={22} onClick={handleSidebarToggle} />
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className={sidebarOpen ? "visible" : ""}>
              <MdCalendarMonth size={30} onClick={handleModalOpen} />
              <p>Calendar</p>
            </li>
            <li className={sidebarOpen ? "visible" : ""}>
              <AiOutlineUserAdd
                size={30}
                onClick={() => setIsAddPatient(true)}
              />
              <p>Add Patient</p>
            </li>
            <li className={sidebarOpen ? "visible" : ""}>
              <FaUsers size={30} />
              <p>My Peers</p>
            </li>
            <li className={sidebarOpen ? "visible" : ""}>
              <FiLogOut size={30} />
              <p>Log-out</p>
            </li>
          </ul>
        </div>
        {isModalOpen && <CustomCalendar onClose={handleModalClose} />}
        {isAddPatient && <AddPatientForm onClose={handleAddModalClose} />}
      </div>
    </>
  );
};
export default Sidebar;
