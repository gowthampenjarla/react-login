import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../actions/loginActions";
import { getUsers } from "../../actions/dashboardActions";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";
import Navbar from "../Layout/Navbar/Navbar";

const Dashboard = ({
  login: { loginUser, isUserLoggedIn },
  dashboard: { users, loading },
  history,
  getUsers,
  userLogout,
}) => {
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    !isUserLoggedIn && history.push("/");
  }, [isUserLoggedIn]);

  const logoutHandler = () => {
    console.log("handler");
    userLogout();
  };

  if (loading) {
    return (
      <Loader
        className='spinner'
        type='TailSpin'
        color='#073b4c'
        height={100}
        width={100}
      />
    );
  } else {
    return (
      <div>
        {loginUser && <Navbar user={loginUser} logoutUser={logoutHandler} />}
        <div className='container'>
          <h2 className='my-3'>Users List</h2>
          {users.length > 0 && (
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    );
  }
};

Dashboard.propTypes = {};
const mapStateToProps = (state) => ({
  login: state.login,
  dashboard: state.dashboard,
});

const mapDispatchToProps = { getUsers, userLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
