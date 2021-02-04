import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ user }) => {
  return (
    <div>
      <nav className='navbar bg-dark text-light mb-3'>
        <div className='container'>
          <h3>Welcome {user.email}</h3>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'></li>
            <li className='nav-item'></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
