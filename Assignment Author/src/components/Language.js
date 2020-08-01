import React, { Component } from "react";
import {
  actionGetLoginResponse,
  actionGetLanguage,
  actionLanguageDelete,
} from "../actions/ProductAction";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
    };
  }
  getLanguage = () => {
    try {
      const auth = true;
      this.props.actionGetLanguage(auth).then(() => {
        const { result } = this.props.languageList;
        this.setState({ languages: result });
      });
    } catch (error) {
      alert("something Wnt Wrong");
    }
  };
  handledelete = (data_id) => {
    const auth = true;
    this.props.actionLanguageDelete(data_id, auth).then(() => {
      const { message } = this.props.languageDelete;
      if (message) this.getLanguage();
    });
  };
  componentDidMount() {
    const loginAuth = localStorage.getItem("token");
    if (loginAuth) {
      try {
        const auth = true;
        this.props.actionGetLoginResponse(loginAuth, auth).then(() => {
          const { AuthId } = this.props;
          const data = AuthId?.admin._id;
          if (!data) {
            this.props.history.push("/");
            localStorage.removeItem("token");
          } else {
            this.getLanguage();
          }
        });
      } catch (error) {
        alert("something Wnt Wrong");
      }
    } else {
      this.props.history.push("/");
      localStorage.removeItem("token");
    }
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Language Name</th>
            <th>Language Code</th>
            <th>Align</th>
            <th>flag_status</th>
          </tr>
        </thead>
        <tbody>
          {this.state.languages.map((language, index) => {
            return (
              <tr key={language._id}>
                <th scope="row">{index + 1}</th>
                <td>{language.language_name}</td>
                <td>{language.language_code}</td>
                <td>{language.align}</td>
                <td>{language.flag}</td>
                <td>
                  <Button color="primary">Add</Button>{" "}
                </td>
                <td>
                  <Link to="/language/`${language._id}`">
                    <Button color="secondary">Update</Button>{" "}
                  </Link>
                </td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.handledelete(language._id)}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    AuthId: state.reducer.loginResponseData,
    languageList: state.reducer.languageData,
    languageDelete: state.reducer.languagedelete,
  };
};

export default connect(mapStateToProps, {
  actionGetLoginResponse,
  actionGetLanguage,
  actionLanguageDelete,
})(Language);
