import { combineReducers } from "redux";
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import footerReducer from "./reducers/footerReducer";

const rootReducer = combineReducers({
  headerReducer,
  mainReducer,
  footerReducer
});

export default rootReducer;
