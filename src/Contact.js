import React from "react";
import { InlineWidget } from "react-calendly";
import './Contact.css';  // Assuming you have a CSS file for styling

function Scheduler() {
  return (
    <section className="schedule-cal">
      {/* Heading at the top */}
      <h2 className="scheduler-heading">Schedule a Meeting with Our Dental Care Connects Team</h2>
      
      {/* Calendly Inline Widget */}
      <InlineWidget url="https://calendly.com/abhigangwarlife/30min" />

      {/* Contact Information at the bottom */}
      
    </section>
  );
}

export default Scheduler;
