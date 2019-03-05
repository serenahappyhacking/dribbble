import { navItems } from "../../../model/header";

/* fetch nav data */
export const REQUEST_NAV = "REQUEST_NAV";
const requestNav = data => {
  return {
    type: REQUEST_NAV,
    data
  };
};

export const RECEIVE_NAV = "REQUEST_NAV";
const receiveNav = data => {
  return {
    type: RECEIVE_NAV,
    data
  };
};

export const fetchNavData = async dispatch => {
  dispatch(requestNav);
  return await (() => {
    return new Promise(reject => {
      fetch(`/fetch/navdata`)
        .then(() => dispatch(receiveNav(navItems)))
        .then(error => reject(error));
    });
  })();
};

// export const fetchNavData = () => {
//   return dispatch => {
//     dispatch(requestNav);
//     return fetch(`/fetch/navdata`)
//       .then(data => dispatch(receiveNav(data)))
//       .then(error => reject(error));
//   };
// };

// const resolveNavData = () => {
//   return new Promise((resolve, reject) => {
//     fetch(`/fetch/navdata`)
//       .then(data => resolve(data))
//       .then(error => reject(error));
//   });
// };

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

export const fetchSearchForm = text => {
  return dispatch => {
    dispatch(requestSearch(text));
    return fetch(`/fetch/${text}`)
      .then(data => dispatch(receiveSearch(data)))
      .then(error => `Error occured. ${error}`);
  };
};
