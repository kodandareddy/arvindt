import { render } from "react-dom";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import React, { Component } from "react";
import { actionLanguage } from "../actions/ProductAction";

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language_name: "",
      language_code: "",
      align: "",
      flag: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data["language_name"] = this.state.language_name;
    data["language_code"] = this.state.language_code;
    data["align"] = this.state.align;
    data["flag"] = this.state.flag;

    try {
      const auth = true;
      this.props.actionLanguage(data, auth).then(() => {
        this.props.history.push("/language");
      });
    } catch (error) {
      alert("something Wnt Wrong");
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="login">
        <div className="login__container">
          <h1></h1>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Language_name
            </label>
            <input
              name="language_name"
              id=" language_name"
              placeholder="Enter your language_name"
              type="text"
              value={this.state.language_name}
              onChange={this.handleChange}
            />

            {/* Password Starts */}

            <label htmlFor="password" style={{ display: "block" }}>
              Password
            </label>
            <input
              name="language_code"
              id="language_code"
              placeholder="Enter your language_code"
              type="text"
              value={this.state.language_code}
              onChange={this.handleChange}
            />
            <label htmlFor="align" style={{ display: "block" }}>
              align
            </label>
            <input
              name="align"
              id="align"
              placeholder="Enter your align"
              type="text"
              value={this.state.align}
              onChange={this.handleChange}
            />
            <label htmlFor="flag" style={{ display: "block" }}>
              flag
            </label>
            <input
              name="flag"
              id="flag"
              placeholder="Enter your flag"
              type="text"
              value={this.state.flag}
              onChange={this.handleChange}
            />

            <div className="button-container">
              <button
                type="button"
                className="outline"
                onClick={() => this.goToLanguage()}
              >
                Go Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.reducer.language,
  };
};

export default connect(mapStateToProps, { actionLanguage })(Operations);
