import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
});

export const appName = 'currency-watcher-app';

const CryptoCompareApiClient = {
    getTopList: (limit, currency) => (
        axiosClient.get(`top/totalvol?limit=${limit}&tsym=${currency}&extraParams=${appName}`)
    ),
    getCoinPriceAvg: (coins, currency) => (
        axiosClient.get(`pricemultifull?fsyms=${coins}&tsyms=${currency}`)),
    getCoins: () => (axiosClient.get(`all/coinlist`)),
    getChanges: () => (axiosClient.get('all/exchanges'))
};

export default CryptoCompareApiClient;
