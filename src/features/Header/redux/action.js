import { navItems } from "../../../model/header";
console.log(navItems);
/* fetch nav data */
export const REQUEST_NAV = "REQUEST_NAV";
const requestNav = reqState => {
  return {
    type: REQUEST_NAV,
    reqState
  };
};

export const RECEIVE_NAV = "REQUEST_NAV";
const receiveNav = data => {
  return {
    type: RECEIVE_NAV,
    data
  };
};

const fetchNavDataPromise = dispatch => {
  return new Promise((resolve, reject) => {
    fetch(`/fetch/navdata`)
      .then(() => dispatch(receiveNav(navItems)))
      .then(error => reject(error));
  });
};

export const fetchNavData = async dispatch => {
  dispatch(requestNav);
  return await fetchNavDataPromise(dispatch);
};

/* fetch Search form data */
export const REQUEST_SEARCH = "REQUEST_SEARCH";
const requestSearch = text => {
  return {
    type: REQUEST_SEARCH,
    text
  };
};

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
const receiveSearch = data => {
  return {
    type: RECEIVE_SEARCH,
    data
  };
};

const fetchSearchFormPromise = (dispatch, text) => {
  return new Promise(() => {
    fetch(`/fetch/${text}`)
      .then(data => dispatch(receiveSearch(data)))
      .then(error => `Error occured. ${error}`);
  });
};

export const fetchSearchForm = async (dispatch, text) => {
  dispatch(requestSearch(text));
  await fetchSearchFormPromise(dispatch, text);
};
