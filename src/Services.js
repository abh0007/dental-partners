import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { name: 'Insurance Eligibility & Benefits', icon: '📄', path: '/insurance-eligibility' },
  { name: 'Bookkeeping & Accounting', icon: '📚', path: '/bookkeeping' },
  { name: 'Pending Claims Management', icon: '🕒', path: '/pending-claims' },
  { name: 'IT Setup', icon: '💻', path: '/it-setup' },
 
  { name: 'Patient Coordination', icon: '👨‍⚕️', path: '/patient-coordination' },
  { name: 'Treatment Coordination', icon: '🩺', path: '/treatment-coordination' },
  { name: 'Marketing Maintenance', icon: '📣', path: '/marketing-maintenance' },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="./video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <Link key={index} to={service.path} className="service">
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
          </Link>
        ))}
      </div>
     
    </section>
    
  );
}

export default Services;
