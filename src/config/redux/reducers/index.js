import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE } from "../constants/action-types";

const initialState = {
  pathname: '/',
  loading: false,
};

const routesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_REQUEST:
      return { ...state, loading: action.loading };
    case FETCH_PAGE_FAILURE:
      return { ...state, loading: action.loading, error: true };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        [action.pageType]: action.data,
        error: false,
      };
    default:
      return state;
  }
};

const routesReducer = (history) => combineReducers({
  page: routesReducers,
  router: connectRouter(history)
})

export default routesReducer