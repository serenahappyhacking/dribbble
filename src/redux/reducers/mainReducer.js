import { REQUEST_SEARCH, RECEIVE_SEARCH } from "../action";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
    case RECEIVE_SEARCH:
    default:
      return state;
  }
};

export default reducer;
