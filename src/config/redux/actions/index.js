import { FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE } from "../constants/action-types";
import { TOP_COINS, HOME, SEARCH, COINS } from "../constants/page-types";
import { push } from 'connected-react-router'

const fetchPage = (params, bi) => {

 console.log("HUH", params);
 console.log("HHHHH", bi)

  return () => {
    let ajaxPromise = { type: '', state: [] };
    switch (params['pathname']) {
      case HOME:
        ajaxPromise['type'] = HOME;
        break;
      case SEARCH:
        ajaxPromise['type'] = SEARCH;
        break;
      case COINS:
        ajaxPromise['type'] = COINS;
        break;
      case TOP_COINS: {
        ajaxPromise['type'] = TOP_COINS;
      }
      default:
        ajaxPromise['type'] = '/';
        return;
    }
    return ajaxPromise;
  };
};

export default fetchPage