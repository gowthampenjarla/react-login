import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getLogin } from "../../actions/loginActions";
import { Redirect, withRouter } from "react-router-dom";

const Login = ({
  login: { loginUser, isUserLoggedIn, loading, error },
  getLogin,
  history,
}) => {
  useEffect(() => {
    isUserLoggedIn && history.push("/dashboard");
  }, [isUserLoggedIn]);

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
  }

  return (
    // <div className='col-md-6 offset-md-3 mt-5'>
    <div className={styles.loginWrapper}>
      <div className='container pt-5'>
        <div className=' col-md-6 offset-md-3 mt-5 card'>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              password: Yup.string().required("Password is required."),
              email: Yup.string()
                .email("Invalid email address.")
                .required("Email address is required."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              //   setTimeout(() => {
              //     alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              //   }, 400);
              getLogin(JSON.stringify(values));
            }}
          >
            {(formik) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit(e);
                }}
              >
                <h3>Log in</h3>

                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    className='form-control'
                    placeholder='Enter email'
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className={styles.errorMessage}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    className='form-control'
                    placeholder='Enter password'
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className={styles.errorMessage}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className={styles.errorMessage_be}>{error}</div>
                <button
                  type='submit'
                  className='btn btn-dark btn-lg btn-block mt-5'
                >
                  Sign in
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};
const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, { getLogin })(Login);
