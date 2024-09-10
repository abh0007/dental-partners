import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function PatientCoordination() {
  return (
    <div className="contact-details">
      <section className='contact-info'>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> contact@dentalcareconnects.com</p>
        <p><strong>Website:</strong> <a href="https://www.dentalcareconnects.com" target="_blank" rel="noopener noreferrer">www.dentalcareconnects.com</a></p>
        </section>       
        <section className='footer-head'> 
        
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
         
          
            <NavLink to="/about-us" activeClassName="active">
              About Us
            </NavLink>
          
          </section>
          <section className='footer-links'>
          
            <NavLink to="/patient-coordination" activeClassName="active">
              Patient Coordinator
            </NavLink>
          
          
            <NavLink to="/insurance-eligibility" activeClassName="active">
              Insurance Eligibilty 
            </NavLink>
          
          
            <NavLink to="/bookkeeping" activeClassName="active">
              Bookkeeping and Accounting
            </NavLink>
          
          
            <NavLink to="/pending-claims" activeClassName="active">
              Pending Claims
            </NavLink>
          
          
            <NavLink to="/it-setup" activeClassName="active">
              IT Services
            </NavLink>
          
          
            <NavLink to="/treatment-coordination" activeClassName="active">
              Treatment Coordinator
            </NavLink>
          
          
            <NavLink to="/marketing-maintenance" activeClassName="active">
              Marketing Maintenance
            </NavLink>
          
          </section>
          <hr className="footer-line" />
      <footer className="footer-copyright">
        <p>&copy; 2024 Dental Care Connects. All Rights Reserved.</p>
      </footer>
      </div>
  );
}

export default PatientCoordination;
