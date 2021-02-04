import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
});
