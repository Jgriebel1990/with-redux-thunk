import { combineReducers } from 'redux'
import githubReducer from './github';

const store = combineReducers({
    repo: githubReducer
});


export default store