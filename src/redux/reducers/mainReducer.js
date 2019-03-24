import {
  FETCH_DRIBBBLES_IMAGES,
  FETCH_DRIBBBLES_BIG_IMAGES,
  CHANGE_LAYOUT
} from "../action";

const initialState = {
  content: [],
  bigContent: [],
  selectedLayout: "smallInfoSelected"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIBBBLES_IMAGES:
      return { ...state, content: [...action.data] };
    case FETCH_DRIBBBLES_BIG_IMAGES:
      return { ...state, bigContent: [...action.data] };
    case CHANGE_LAYOUT:
      return { ...state, selectedLayout: action.layout };
    default:
      return state;
  }
};

export default reducer;
