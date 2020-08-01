/**
 *
 * @description Redux reducer : all the cases of redux used in the entier project is defined here.
 */

import * as types from "../actions/actions";

/**
 * @description Initial state / default state value
 * @memberof: reducers
 * @constant products for the products in the application
 * @constant totalProduct for shwoing the initaial value
 * @constant createCustomer for customer detail initaily kept as an empty object.
 */
const initialState = {
  loginResponseData: [],
  language: "",
};

const reducer = (state, action) => {
  console.log("reducer -> action", action);
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    //set state data to initial state and return to action

    case types.LOGIN:
      return Object.assign({}, state, {
        loginResponseData: action.loginResponse,
      });

    case types.LANGUAGEDATA:
      return Object.assign({}, state, {
        languageData: action.languageData,
      });
    case types.LANGUAGE:
      return Object.assign({}, state, {
        language: action.language,
      });
    case types.LANGUAGEDELETE:
      return Object.assign({}, state, {
        languagedelete: action.languagedelete,
      });

    default:
      // need this for default case
      return state;
  }
};
export default reducer;
