import {
  // REQUEST_SEARCH,
  // RECEIVE_SEARCH,
  FETCH_DRIBBBLES_IMAGES,
  CHANGE_LAYOUT
} from "../action";

const initialState = {
  content: [],
  selectedLayout: "smallInfoSelected"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case REQUEST_SEARCH:
    // case RECEIVE_SEARCH:
    case FETCH_DRIBBBLES_IMAGES:
      return { ...state, content: [...action.data] };
    case CHANGE_LAYOUT:
      return { ...state, selectedLayout: action.layout };
    default:
      return state;
  }
};

export default reducer;
