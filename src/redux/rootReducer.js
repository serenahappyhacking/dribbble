import { combineReducers } from "redux";
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import footerReducer from "./reducers/footerReducer";

const rootReducer = combineReducers({
  header: headerReducer,
  main: mainReducer,
  footer: footerReducer
});

export default rootReducer;
