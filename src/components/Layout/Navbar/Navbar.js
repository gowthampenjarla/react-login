import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Navbar = ({ user, logoutUser }) => {
  return (
    <Fragment>
      <nav className='navbar bg-dark text-light mb-3'>
        <div className='container'>
          {user && <h3>Welcome {user.email}</h3>}

          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <a
                className='btn'
                style={{ color: "white" }}
                onClick={logoutUser}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func,
};

export default Navbar;
