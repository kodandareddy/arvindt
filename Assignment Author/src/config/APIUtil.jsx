/**
 * @description Class with functions with post, put, get, delete method api call
 */
import Axios from "axios";
import UrlConstants from "./UrlConstants";

class APIUtil {
  /**
   *
   * @description action to call get api with/without auth token
   * @param {*} url - API URL
   * @memberof APIUtil
   */
  postMethod(url, data, auth) {
    var headersSet = {};
    if (auth) {
      var accessToken = localStorage.getItem("token");
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log(headersSet);
    return Axios({
      method: "post",
      url: url,
      data: data,
      headers: headersSet,
    })
      .then((response) => response)
      .catch((error) => {
        console.log("ERROR", error);
      });
  }

  getMethod(url, auth) {
    var headersSet = {};
    if (auth) {
      var accessToken = localStorage.getItem("token");
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log(headersSet);
    return Axios({
      method: "get",
      url: url,
      headers: headersSet,
    })
      .then((response) => response)
      .catch((error) => {
        console.log("ERROR", error);
      });
  }
  deleteMethod(url, auth) {
    var headersSet = {};
    if (auth) {
      var accessToken = localStorage.getItem("token");
      headersSet["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log(headersSet);
    return Axios({
      method: "delete",
      url: url,
      headers: headersSet,
    })
      .then((response) => response)
      .catch((error) => {
        console.log("ERROR", error);
      });
  }
}

export default new APIUtil();
