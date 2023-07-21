import Header from "./view/components/Header/Header.js";
import Footer from "./view/components/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./view/components/Users/UserTable.js";
import Login from "./view/components/Login/Login.js";
import "./App.scss";
import PatientDetails from "./view/Pages/Patients/view/PatientDetails.js";
import Dashboard from "./view/Pages/Dashboard/DashBoard.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastConfig from "./view/toastConfig.js";

function App() {
  console.log("project env", process.env);
  return (
    <div className="app-container">
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <UserTable />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/patients/:patientId" element={<PatientDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer {...toastConfig} />
    </div>
  );
}

export default App;
