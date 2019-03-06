import {
  REQUEST_NAV,
  RECEIVE_NAV,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from "./action";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NAV:

    case RECEIVE_NAV:
      console.log("hahha");
      return { ...state, ...action.data };
    // case REQUEST_SEARCH:
    // case RECEIVE_SEARCH:

    default:
      return state;
  }
};

export default reducer;
