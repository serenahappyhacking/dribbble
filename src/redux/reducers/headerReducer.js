import { REQUEST_NAV, RECEIVE_NAV } from "../action";

const initialState = {
  isFetching: false,
  navItems: {}
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NAV:
      console.log(`lalalal`);
      return { ...state, ...{ isFetching: true } };
    case RECEIVE_NAV:
      console.log(state.header);
      return { isFetching: false, navItems: action.header.data };
    default:
      return state;
  }
};

export default headerReducer;
