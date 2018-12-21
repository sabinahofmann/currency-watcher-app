import {
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE
} from '../actions/types';

const initialState = {
  pathname: '/',
  loading: false,
};

const routesReducer = (state = initialState, action) => {
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

export default routesReducer;