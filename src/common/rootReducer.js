import { combineReducers } from "redux";
import headerReducer from "../features/Header/redux/headerReducer";
import mainReducer from "../features/Main/redux/mainReducer";
import footerReducer from "../features/Footer/redux/footerReducer";

const rootReducer = combineReducers({
  headerReducer,
  mainReducer,
  footerReducer
});

export default rootReducer;
