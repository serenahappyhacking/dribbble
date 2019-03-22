import {
  // REQUEST_SEARCH,
  // RECEIVE_SEARCH,
  FETCH_DRIBBBLES_IMAGES
} from "../action";

const initialState = {
  content: [],
  optionsAreShow: { smallInfoIsShow: true, largeInfoIsShow: false }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case REQUEST_SEARCH:
    // case RECEIVE_SEARCH:
    case FETCH_DRIBBBLES_IMAGES:
      return { ...state, content: [...action.data] };
    default:
      return state;
  }
};

export default reducer;
