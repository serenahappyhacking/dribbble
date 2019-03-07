import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
// import DevTools from "./containers/DevTools";

const loggerMiddleware = createLogger();

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
};

export default configureStore;
