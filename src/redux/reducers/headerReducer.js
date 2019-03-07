import { REQUEST_NAV, RECEIVE_NAV } from "../action";

const initialState = {
  isFetching: false,
  navItems: {}
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NAV:
      return { ...state, ...{ isFetching: true } };
    case RECEIVE_NAV:
      return { isFetching: false, navItems: action.data };
    default:
      return state;
  }
};

export default header;
