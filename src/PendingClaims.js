// src/components/InsuranceEligibility.js
import React from 'react';
import "./PendingClaims.css";

function PendingClaims() {
  return (
    <div className='PendingClaims-page'>
      <section className='PendingClaim-section'>
        <h1>PENDING CLAIM MANAGEMENT</h1>
    </section>
    <section className='PendingClaims-why'>
      <h2>Navigating insurance denials can be a challenging and time-consuming process for dental practices. Understanding the reasons behind denials, appealing claims, and recovering lost revenue requires expertise and dedicated resources. Our denial management services are designed to streamline this process and help you overcome insurance roadblocks effortlessly. Our experienced team meticulously analyzes denials, identifies patterns, and develops effective strategies to maximize claim acceptance. We handle the time-consuming tasks of claim resubmissions, appeals, and follow-ups, allowing your staff to focus on patient care.


</h2><h2>By leveraging our denial management services, you can minimize revenue loss, reduce administrative burdens, and improve overall practice efficiency. Let us help you navigate the complexities of insurance denials, ensuring you receive the rightful reimbursement you deserve.</h2>
    </section>
    <section className='PendingClaim-id'>
      <div className='PendingClaim-card'>
        <img src="/images/denial.jpeg" alt="Denial Management"/>
        <h3>Denial Management</h3>      
      </div>
      <div className='PendingClaim-card2'>
      <img src="/images/statusing.jpg" alt="Denial Claim Statusing"/>
      <h3>Denial Claim Statusing</h3>
      </div>
        
    </section>
    <section className='PendingClaims-content'>
      <h2>Denial Management</h2>
      <p>
      Denial management tackles insurance claim denials in the dental industry. It involves identifying denial reasons, minimizing rejections, and managing appeals. Streamlining denial management optimizes revenue, reduces administrative burden, and ensures prompt reimbursement. Focus on quality care while we handle denials efficiently.
      </p>
      <h2>Dental Claim Statusing

      </h2>
      <p>Dental claim statusing involves tracking the progress of insurance claims. Key meanings include: “Submitted” (claim sent), “Received” (acknowledged), “In Review” (under evaluation), “Pending Additional Information” (require more documentation), “Adjudication” (calculating payment), “Denied” (rejected), “Approved” (accepted), and “Paid” (processed and paid). Understanding these statuses helps dental providers stay updated on claim progress for efficient processing and reimbursement.</p>
    </section>
    
    </div>
  );
}

export default PendingClaims;
