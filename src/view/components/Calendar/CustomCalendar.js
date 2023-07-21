import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import "./customCalendar.scss";

const CustomCalendar = ({ onClose }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="calendar-modal-container">
        <h1>Calendar</h1>
        <Calendar onChange={setDate} value={date} />
        <p> Selected date: {date.toDateString()}</p>
        <Button
          name="Close"
          onClick={onClose}
          className="button button--primaryButton"
        />
      </div>
    </div>
  );
};

export default CustomCalendar;
