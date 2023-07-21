const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const jwt = require("jsonwebtoken");

dotenv.config({ path: "../../.env" });
app.use(cors());

app.use(express.json());

const patientsContr = require("./controllers/patientsController");
const port = 8080;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mysecretkey", (error, user) => {
      if (error) {
        if (
          error.name === "TokenExpiredError" &&
          error.message === "jwt expired"
        ) {
          const refreshToken = req.headers.authorization.split(" ")[1];
          jwt.verify(
            refreshToken,
            "refreshsecretkey",
            (refreshError, refreshPatient) => {
              if (refreshError) {
                return res.status(403).json({ error: "Invalid refresh token" });
              }

              const newAccessToken = jwt.sign(
                { patientId: refreshPatient.patientId },
                "mysecretkey",
                { expiresIn: "2h" }
              );

              res.header("Authorization", newAccessToken);
              req.headers.authorization = `Bearer ${newAccessToken}`;
              next();
            }
          );
        } else {
          return res.status(403).json({ error: "Invalid token" });
        }
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Authentication token required" });
  }
};

app.get("/patients", patientsContr.getAllPatients);
app.get("/patientsbyid", authenticateToken, patientsContr.getPatientById);
app.post("/patients", authenticateToken, patientsContr.createPatient);
app.delete("/patients", authenticateToken, patientsContr.deletePatient);
app.put("/patients/:id", authenticateToken, patientsContr.updatePatient);
app.patch("/patients", patientsContr.patchPatient);
app.post("/refresh-token", patientsContr.refreshToken);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
