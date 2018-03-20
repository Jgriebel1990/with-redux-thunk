import * as githubActions from './actions'
import * as types from './types';

const initialState = {
    repo: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case types.FETCH_REPO_START:
            return state;
        case types.FETCH_REPO_SUCCESS:
            return state;
        case types.FETCH_REPO_FAILURE:
            return state;
        default:
            return state;
    }
}

export {
    githubActions
}

export default reducer;