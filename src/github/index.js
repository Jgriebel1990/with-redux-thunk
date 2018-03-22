import * as githubActions from "./actions";
import * as types from "./types";
import { combineReducers } from 'redux';

const initialState = {};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPO_START:
      return state;
    case types.FETCH_REPO_SUCCESS:
      return {
        ...state,
        ...action.payload.value
      };
    case types.FETCH_REPO_FAILURE:
      return state;
    default:
      return state;
  }
};

const searchInitial = "";

const searchReducer = (state = searchInitial, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return action.payload.value;
    default:
      return state;
  }
};

export { githubActions };

export default combineReducers({
  repo: repoReducer,
  search: searchReducer
});
