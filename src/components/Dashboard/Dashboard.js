import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/dashboardActions";
import Loader from "react-loader-spinner";
import Table from "react-bootstrap/Table";
import Navbar from "../Layout/Navbar/Navbar";

const Dashboard = ({
  login: { loginUser, isUserLoggedIn },
  dashboard: { users, loading },
  history,
  getUsers,
}) => {
  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);
  //   !isUserLoggedIn && history.push("/");
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
        {/* <Navbar user={loginUser} /> */}
        <div className='container'>
          {/* <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Age</th>
                      <th scope='col'>Gender</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      <tr>
                        <th scope='row'>1</th>
                        <td>{user.id}</td>
                        <td>{user.name}</td> <td>{user.age}</td> <td>{user.gender}</td>{" "}
                        <td>{user.email}</td> <td>{user.phoneNo}</td>
                      </tr>;
                    })}
                  </tbody>
                </table> */}
          {users.length > 0 && (
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Gender</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  <tr>
                    <th scope='row'>1</th>
                    <td>{user.id}</td>
                    <td>{user.name}</td> <td>{user.age}</td>{" "}
                    <td>{user.gender}</td> <td>{user.email}</td>{" "}
                    <td>{user.phoneNo}</td>
                  </tr>;
                })}
              </tbody>
            </table>
          )}
          {/* <Table striped bordered hover variant='dark'>
                <thead>
            <tr>
              <th>#</th>
              {users.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
                </Table> */}
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

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
