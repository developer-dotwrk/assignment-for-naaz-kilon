import * as reducers from "./index";
import initialState from "../initialState";

export default (state = initialState(), action) =>
  (reducers[action.type] || reducers.unknownAction)(state, action);
