import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import routesReducer from "../reducers/index";

export const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  routesReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)

export default store