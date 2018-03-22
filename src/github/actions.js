import * as types from './types';
import axios from 'axios';
const baseUrl = 'https://api.github.com/search/repositories?q=';
export const setSearch = search => ({
    type: types.UPDATE_SEARCH,
    payload: {
        value: search
    } 
})
export const fetchRepo = repoName => {
    return dispatch => {
        const url = `${baseUrl}${repoName}`
        dispatch({type: types.FETCH_REPO_START});
        axios.get(url)
            .then(response => {

                dispatch({
                    type: types.FETCH_REPO_SUCCESS,
                    payload: {
                        value: response.data
                    }
                });
            })
            .catch(err => {
                dispatch({type: types.FETCH_REPO_FAILURE});
            });
    }
};