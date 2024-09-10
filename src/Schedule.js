import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Schedule.css';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meetingDuration, setMeetingDuration] = useState(30); // Default to 30 minutes

  const handleDurationChange = (e) => {
    setMeetingDuration(e.target.value);
  };

  return (
    <div className="schedule-container">
       <video autoPlay muted loop id="video-background">
        <source src="./videos/bg2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <header className="schedule-header">
        <h1>Schedule a Meeting with our Dental Care Connects Team</h1>
      </header>
      <main className="schedule-main">
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
            </div>
          </div>
          <div className="date-time-picker">
            <h3>Select a Date & Time</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <div className="duration-selection">
              <h4>Select Meeting Duration</h4>
              <div>
                <label>
                  <input
                    type="radio"
                    value="15"
                    checked={meetingDuration === "15"}
                    onChange={handleDurationChange}
                  />
                  15 mins
                </label>
                <label>
                  <input
                    type="radio"
                    value="30"
                    checked={meetingDuration === "30"}
                    onChange={handleDurationChange}
                  />
                  30 mins
                </label>
                <label>
                  <input
                    type="radio"
                    value="45"
                    checked={meetingDuration === "45"}
                    onChange={handleDurationChange}
                  />
                  45 mins
                </label>
                <label>
                  <input
                    type="radio"
                    value="60"
                    checked={meetingDuration === "60"}
                    onChange={handleDurationChange}
                  />
                  60 mins
                </label>
              </div>
            </div>
            <div className="schedule-button">
              <button type="button">Schedule</button>
            </div>
            <div className="timezone">
              <p>Time zone</p>
              <select>
                <option value="IST">India Standard Time (IST)</option>
                <option value="EST">Eastern Standard Time (EST)</option>
                <option value="PST">Pacific Standard Time (PST)</option>
              </select>
            </div>
          </div>
        </div>
      </main>
      <footer className="schedule-footer">
        <p className="footer-note">
          By proceeding, you confirm that you have read and agree to{' '}
          <a href="calendly-terms-url">Calendly's Terms of Use</a> and{' '}
          <a href="privacy-notice-url">Privacy Notice</a>.
        </p>
      </footer>
    </div>
  );
}

export default Schedule;
