import "./Login.css";
import { render } from "react-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { Component } from "react";
import { actionGetLoginResponse } from "../actions/ProductAction";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Registration: true,
    };
  }
  render() {
    return (
      <div className="login">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(fields) => {
            try {
              const auth = false;
              this.props.actionGetLoginResponse(fields, auth).then(() => {
                const { loginToken, history } = this.props;
                localStorage.setItem("token", loginToken.token);
                history.push("/language");
              });
            } catch (error) {
              alert("something Wnt Wrong");
            }
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Please enter a valid email.")
              .required("Email is required."),
            password: Yup.string()
              .required("Password provided.")
              .min(5, "Password is too short - should be 8 chars minimum."),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <div className="login__container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" style={{ display: "block" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-danger"
                  />

                  {/* Password Starts */}

                  <label htmlFor="password" style={{ display: "block" }}>
                    Password
                  </label>
                  <input
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    type="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-danger"
                  />
                  <div className="button-container">
                    <button
                      type="button"
                      className="outline"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            );
          }}
        </Formik>
        {!this.state.Registration && (
          <button
            type="button"
            className="registerButtom"
            onClick={() => this.props.history.push("/registart")}
          >
            Go to Registration
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginToken: state.reducer.loginResponseData,
  };
};

export default connect(mapStateToProps, {
  actionGetLoginResponse,
})(Login);
