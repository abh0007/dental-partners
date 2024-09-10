import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './images/abh5.png'; // Update with the correct path to your logo

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <ul className="nav-list">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About Us
            </NavLink>
          </li>

          {/* Dropdown for Practice Support Services */}
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <NavLink activeClassName="active">
              Practice Support Services
              <span className="dropdown-arrow">⮟</span>
            </NavLink>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/patient-coordination" activeClassName="active">
                    Patient Coordination Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/insurance-eligibility" activeClassName="active">
                    Insurance Eligibilty and Benefits
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookkeeping" activeClassName="active">
                    Bookkeeping and Accounting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pending-claims" activeClassName="active">
                    Pending Claims Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/it-setup" activeClassName="active">
                    IT Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/treatment-coordination" activeClassName="active">
                    Treatment Coordination
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marketing-maintenance" activeClassName="active">
                    Marketing Maintenance
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
