import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import routesReducer from "../reducers/index";

const middleware = process.env.NODE_ENV !== 'production' ? [ReduxThunk, logger] : [ReduxThunk];
const store = createStore(routesReducer, applyMiddleware(...middleware));

export const testStore = createStore(routesReducer, applyMiddleware(ReduxThunk));

export default store;