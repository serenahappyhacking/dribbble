import fetch from "cross-fetch";

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

export const searchFetch = text => {
  return dispatch => {
    dispatch(requestSearch(text));
    return fetch(`/fetch/${text}`)
      .then(data => dispatch(receiveSearch(data)))
      .then(error => `Error occured. ${error}`);
  };
};
