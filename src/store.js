import { createStore } from 'redux'
import githubReducer from './github';


const store = createStore(
    githubReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store