/**
 *
 * @description: All Product Action api are called here.
 * @exports : action defined for api call.
 * @memberof: ProductAction.js
 *
 */

import * as types from "./actions";
import APIUtil from "../config/APIUtil";
import UrlConstants from "../config/UrlConstants";

/**
 * @description:getting the mocky data from Api
 * @let : (url) for setting the url  for Api
 * @returns mockyResponse from response of Api
 */

export function actionGetLoginResponse(fields, auth) {
  let url;
  if (auth) {
    url = UrlConstants.AuthUrl;
  } else {
    url = UrlConstants.LoginUrl;
  }
  return function (dispatch) {
    return APIUtil.postMethod(url, fields, auth).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.LOGIN,
          loginResponse: response.data,
        });
      } else {
        dispatch({
          type: types.LOGIN,
          loginResponse: [],
        });
      }
    });
  };
}

export function actionGetLanguage(auth) {
  let url = UrlConstants.Languages;

  return function (dispatch) {
    return APIUtil.getMethod(url, auth).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.LANGUAGEDATA,
          languageData: response.data,
        });
      } else {
        dispatch({
          type: types.LANGUAGEDATA,
          languageData: [],
        });
      }
    });
  };
}
export function actionLanguage(data, auth) {
  let url = UrlConstants.LanguageOperations;

  return function (dispatch) {
    return APIUtil.postMethod(url, data, auth).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.LANGUAGE,
          language: response.data,
        });
      } else {
        dispatch({
          type: types.LANGUAGEDATA,
          language: [],
        });
      }
    });
  };
}

export function actionLanguageDelete(data, auth) {
  console.log(data);
  let url = UrlConstants.LanguageDelete + `${data}`;
  console.log(url);
  return function (dispatch) {
    return APIUtil.deleteMethod(url, auth).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.LANGUAGEDELETE,
          languagedelete: response.data,
        });
      } else {
        dispatch({
          type: types.LANGUAGEDELETE,
          languagedelete: [],
        });
      }
    });
  };
}
