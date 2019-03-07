import { header } from "../model/header";
import { contentSrc } from "../model/content";

/* Header --- fetch nav data */
export const REQUEST_NAV = "REQUEST_NAV";
const requestNav = () => {
  return {
    type: REQUEST_NAV
  };
};

export const RECEIVE_NAV = "RECEIVE_NAV";
const receiveNav = data => {
  return {
    type: RECEIVE_NAV,
    data
  };
};

export const fetchNavData = () => {
  return dispatch => {
    dispatch(requestNav());
    Promise.resolve(header.navItems)
      .then(data => {
        dispatch(receiveNav(data));
      })
      .catch(err => console.log(err));
  };
};

/* Header --- fetch Search form data */
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
    Promise.resolve(contentSrc).then(data => dispatch(receiveSearch(data)));
  };
};

/* Main */
export const SAVE_IMAGE = "SAVE_IMAGE";
export const saveImage = id => ({
  type: SAVE_IMAGE,
  id
});

export const LIKE_IMAGE = "LIKE_IMAGE";
export const likeImage = id => ({
  type: LIKE_IMAGE,
  id
});
