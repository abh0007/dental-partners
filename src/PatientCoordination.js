import React from 'react';
import './PatientSupportServices.css';

function PatientCoordination() {
  return (
    <div className="patient-coordination-container">
      {/* Header Section */}
      <div className="video-container1">
        <video autoPlay loop muted>
          <source src="./video/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="header-section">
        <h1 className="page-title">PATIENT COORDINATION SERVICES</h1>
        <section className='PatientCoordination-why'>
          <h2>Did you know that on average about 30-35% of the calls to dental offices go unanswered nationwide? Also, a recent survey by dentistryIQ revealed that 20% of the new patient calls go unanswered of the 80% that are answered, less than half are converted to a first appointment. The top 10% of practices answer 95% of calls and convert at a rate of 75%.  

As an owner dentist, you are busy treating patients. Even the best front desk staff cannot handle checking in and checking out patients, verifying their insurance, answering phones, and any other tasks that they need to do with 100% accuracy and timeliness.</h2>
        </section>
        <div className="icon-row">
          <div className="icon-item">
            <img src="/images/scheduling.gif" alt="Scheduling an appointment" />
            <p>Scheduling an appointment</p>
          </div>
          <div className="icon-item">
            <img src="/images/location.gif" alt="Providing location details" />
            <p>Providing location details</p>
          </div>
          <div className="icon-item">
            <img src="/images/demographics.gif" alt="Capture Demographics" />
            <p>Capture Demographics</p>
          </div>
          <div className="icon-item">
            <img src="/images/referral.gif" alt="Capture referral information" />
            <p>Capture referral information</p>
          </div>
          <div className="icon-item">
            <img src="/images/insurance.gif" alt="Insurance Information Gathering" />
            <p>Insurance Information Gathering</p>
          </div>
          <div className="icon-item">
            <img src="/images/confirmation.gif" alt="Confirmation calls" />
            <p>Confirmation calls</p>
          </div>
          <div className="icon-item">
            <img src="/images/reschedule.gif" alt="Acceptance of rescheduling" />
            <p>Acceptance of rescheduling</p>
          </div>
          <div className="icon-item">
            <img src="/images/prescription.gif" alt="Prescription Management" />
            <p>Prescription Management</p>
          </div>
          <div className="icon-item">
            <img src="/images/email.gif" alt="Answer google chats and emails" />
            <p>Answer google chats and emails</p>
          </div>
          <div className="icon-item">
            <img src="/images/chatbot.gif" alt="Answer chatbot manually" />
            <p>Answer chatbot manually</p>
          </div>
          <div className="icon-item">
            <img src="/images/reviews.gif" alt="Reply to google reviews on time" />
            <p>Reply to google reviews on time</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2>Scheduling an appointment</h2>
        <p>Difficulty in efficiently scheduling appointments due to long hold times and no differentiation between new patient calls and other soliciting, prescription, and general enquiries.
We will identify New Patient Scheduling calls separately from all other calls and routes to the best people that are able to convince patients to schedule an appointment.
Hence, this increases in new patient intake.</p>

        <h2>Providing location details</h2>
        <p>Patients usually call to find out Public Transportation Access, Proximity to major Highways, Parking and Landmark Information.
Your in-office staff does not have to answer these calls because we will handle it hereafter.
Patients will now be able to come to your office without any friction or issues caused by lacking location details.</p>

        <h2>Capture Demographics</h2>
        <p>Due to lack of time in handling calls currently only basic information is captured by your in-office team. With our help, you will now be able to Capture Patient Demographics details during appointment scheduling itself.
        This allows accuracy in capturing patient demographics for accurate records and personalized communication.</p>

        <h2>Capture referral information</h2>
        <p>Currently you have no idea where your patients are coming from and hence you don't know where to spend your marketing dollars leading to missed opportunities for patient growth and retention.
We will implement a referral management system that captures and tracks referral information to give proper feedback to your marketing team.
Marketing team can with high degree of confidence increase its marketing efforts.</p>

        <h2>Insurance Information Gathering</h2>
        <p>Currently your team does not have the bandwidth to capture Insurance Information, while scheduling the appointment.
We will capture the Insurance Information prior to the appointment, whenever possible so that the Insurance team can verify the information ahead of the time.
This will avoid long wait times during the patients visit to verify the information on the spot, ensuring quick and accurate processing of insurance claims and reimbursements.</p>

        <h2>Confirmation calls</h2>
        <p>Your office may be experiencing high rates of no- shows and last-minute cancellations throwing your schedule off and hence wasted staff hours, resulting in a major financial loss position.
Mismatch between the schedule and the staff is the single most reason for a dental office to fail financially. We use a combination of text, email and phone call-based confirmation providing them with reminders of their appointments 24 and 48 hours in advance, reducing no-show rates.
Hence, there will be very low percentage of no- shows and last-minute cancellations.</p>

        <h2>Acceptance of rescheduling</h2>
        <p>Currently your in-office staff gets annoyed with rescheduling calls and often send them to unscheduled list.
We enable patients and dental clinics to easily make changes or reschedule appointments through a user- friendly interface, allowing for convenient adjustments while minimizing disruptions.
There will be flexibility in accepting changes or rescheduling appointments to accommodate patients' needs and minimize inconvenience increases patient satisfaction and directly impacts your bottom line.</p>

        <h2>Prescription Management</h2>
        <p>Patients call for their prescriptions several times as they are in pain.
This usually annoys the front office staff. We offer a digital prescription management system that simplifies the process of ordering, tracking, and delivering prescriptions to patients, ensuring accuracy and timely fulfillment.
Effective prescription management system that facilitates easy ordering, tracking, and delivery of prescriptions to patients.</p>

        <h2>Answer google chats and emails</h2>
        <p>Currently patients' queries are left unanswered on google chats and mails.
We provide prompt replies to the google chats and mails in order reduce the inconvenience faced by the patients.
This ensures effective communication with patients.</p>

        <h2>Answer chatbot manually</h2>
        <p>Patients feel the need of personalized messages.
We manually handle the chatbot system, allowing human operators to take over and provide personalized and accurate responses to patients' queries when needed.
This ensures personalized and accurate responses.</p>

        <h2>Reply to google reviews on time</h2>
        <p>Currently most of the dental clinics are facing negative impact on their online reputation and patient's perception about them. We monitor and respond to Google reviews promptly, addressing both positive and negative feedback professionally and promptly. This helps maintain a positive online reputation.</p>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        {/* You can add pricing details here */}
      </section>
      
      </div>
  );
}

export default PatientCoordination;
