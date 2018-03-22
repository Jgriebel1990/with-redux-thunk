import * as types from './types';
export const setSearch = search => ({
    type: types.UPDATE_SEARCH,
    payload: {
        value: search
    } 
})
export const fetchRepo = repoName => ({})