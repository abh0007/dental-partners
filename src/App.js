import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Topic from './Topic';
import Services from './Services';
import Home from './Home'; // Home page component
import AboutUs from './AboutUs'; // About Us page component
import PracticeSupportServices from './PatientSupportServices'; // Practice Support Services component
import RecruitmentServices from './RecruitmentServices'; // Recruitment Services component
import Contact from './Contact'; // Contact page component
import PartnershipOpportunities from './PartnershipOpportunities'; // Partnership Opportunities component
import Careers from './Careers'; // Careers page component
import Schedule from './Schedule'; // Schedule page component
import InsuranceEligibility from './InsuranceEligibility'; // Insurance Eligibility page component
import Bookkeeping from './Bookkeeping'; // Bookkeeping page component
import PendingClaims from './PendingClaims'; // Pending Claims page component
import IT from './IT'; // IT Setup page component
import Business from './Business'; // Business Analytics page component
import PatientCoordination from './PatientCoordination'; // Patient Coordination page component
import TreatmentCoordination from './TreatmentCoordination'; // Treatment Coordination page component
import Marketing from './Marketing'; // Marketing Maintenance page component
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Topic/>
              <Services />
            </>
          } 
        /> 

        {/* Other routes for different pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        <Route path="/recruitment-services" element={<RecruitmentServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partnership-opportunities" element={<PartnershipOpportunities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/schedule" element={<Schedule />} />

        {/* Routes for individual services */}
        <Route path="/insurance-eligibility" element={<InsuranceEligibility />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/pending-claims" element={<PendingClaims />} />
        <Route path="/it-setup" element={<IT />} />
        <Route path="/business-analytics" element={<Business />} />
        <Route path="/patient-coordination" element={<PatientCoordination />} />
        <Route path="/treatment-coordination" element={<TreatmentCoordination />} />
        <Route path="/marketing-maintenance" element={<Marketing />} />
      </Routes>
      <PracticeSupportServices/>
    </Router>
  );
}

export default App;
