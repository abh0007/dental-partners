import React from "react";
import "./Schedule.css";
import { useLocation } from "react-router-dom";

function ConfirmationPage() {
  const location = useLocation();
  const { selectedDate, meetingDuration } = location.state || {};

  const formattedDate = selectedDate
    ? selectedDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : "Date not selected";

  return (
    <div className="App">
      <main>
        <div className="meeting-container">
          <div className="meeting-info">
            <img
              src="./images/abh.png"
              alt="Dental Care Connects Logo"
              className="logo"
            />
            <h2>Dental Care Connects</h2>
            <p>{meetingDuration} Minute Meeting</p>
            <div className="meeting-details">
              <span>🕒 {meetingDuration} min</span>
              <span>📅 {formattedDate}</span>
              <span>🌍 India Standard Time</span>
            </div>
          </div>
          <div className="form-container">
            <form>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required />

              <button type="submit">Schedule Event</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ConfirmationPage;
