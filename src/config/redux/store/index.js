import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "../reducers/index";

const middleware = process.env.NODE_ENV !== 'production' ? [thunk, logger()] : [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export const testStore = createStore(rootReducer, applyMiddleware(thunk));

export default store;