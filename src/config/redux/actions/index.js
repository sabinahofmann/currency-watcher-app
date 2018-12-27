import { FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE } from "../constants/action-types";
import { TOP_COINS, HOME, SEARCH, COINS } from "../constants/page-types";

export const fetchPage = (routes, params) => {

  return () => {
    let ajaxPromise;
    switch (routes.path) {
      case HOMEPAGE:
        ajaxPromise = HOMEPAGE;
        break;
      case SEARCH:
        ajaxPromise = SEARCH;
        break;
      case COINS:
        ajaxPromise = COINS;
        break;
      case TOP_COINS: {
        const formData = params;
        ApiClient.getTopList(50, currency)
            .then(json => {
                let coinsName = json.data['Data'].map(result => {
                    return {
                        fullName: result['CoinInfo']['FullName'],
                        symbol: result['CoinInfo']['Name']
                    }              
                });
                ApiClient.getCoinPriceAvg(coinsName.map(coin => coin['symbol']), currency)
                    .then(j => {
                        let data = coinsName.map(coinName => {
                            let coin = {
                                symbol: coinName['symbol'],
                                fullName: coinName['fullName'],
                                price: j.data['RAW'][coinName['symbol']][currency]['PRICE'].toFixed(2),
                                max_supply: j.data['RAW'][coinName['symbol']][currency]['SUPPLY'].toFixed(2),
                                change_24h: j.data['RAW'][coinName['symbol']][currency]['CHANGEPCT24HOUR'].toFixed(2),
                                market_cap: j.data['RAW'][coinName['symbol']][currency]['MKTCAP'].toFixed(2),
                                volume_24h: j.data['RAW'][coinName['symbol']][currency]['TOTALVOLUME24H'].toFixed(2),
                                timestamp: j.data['RAW'][coinName['symbol']][currency]['LASTUPDATE'],
                                sort_by: j.data['RAW'][coinName['symbol']][currency]['MKTCAP']
                            };
                            return coin;
                        }).sort(function(a,b) { return a.sort_by - b.sort_by;}).reverse();
                        ajaxPromise({data: data, timestamp: Date.now()});  
                    }
                ).catch(error => ajaxPromise({error}));
            }).catch(error => ajaxPromise({error}));
        break;
      }
      default:
        '/';
        return;
    }
  };
};