import header from "../model/header";
import content from "../model/content";
import bigContent from "../model/contentBigImgs";

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
// export const REQUEST_SEARCH = "REQUEST_SEARCH";
// const requestSearch = text => {
//   return {
//     type: REQUEST_SEARCH,
//     text
//   };
// };

// export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
// const receiveSearch = data => {
//   return {
//     type: RECEIVE_SEARCH,
//     data
//   };
// };

// export const fetchSearchForm = text => {
//   return dispatch => {
//     dispatch(requestSearch(text));
//     Promise.resolve(content).then(data => dispatch(receiveSearch(data)));
//   };
// };

/* Main Content --- fetch dribbble imgs (small) */
export const FETCH_DRIBBBLES_IMAGES = "FETCH_DRIBBBLES_IMAGES";
const fetchDribbblesImages = data => {
  return {
    type: FETCH_DRIBBBLES_IMAGES,
    data
  };
};

export const fetchMainDribbles = () => {
  return dispatch => {
    Promise.resolve(content).then(data => dispatch(fetchDribbblesImages(data)));
  };
};

/* Main Content --- fetch dribbble imgs (big) */
export const FETCH_DRIBBBLES_BIG_IMAGES = "FETCH_DRIBBBLES_BIG_IMAGES";
const fetchBigDribbleImages = data => {
  return {
    type: FETCH_DRIBBBLES_BIG_IMAGES,
    data
  };
};

const fetchBigDribbles = () => {
  return dispatch => {
    return Promise.resolve(bigContent).then(data =>
      dispatch(fetchBigDribbleImages(data))
    );
  };
};

/* change layout (4 options) */
export const CHANGE_LAYOUT = "CHANGE_LAYOUT";
const selectLayout = layout => {
  return {
    type: CHANGE_LAYOUT,
    layout
  };
};

export const changeLayout = layout => {
  return (dispatch, getState) => {
    if (getState().main.bigContent <= 0) {
      dispatch(fetchBigDribbles()).then(() => dispatch(selectLayout(layout)));
    } else {
      dispatch(selectLayout(layout));
    }
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
