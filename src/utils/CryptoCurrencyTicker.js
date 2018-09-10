import { Component } from 'react';
import PropTypes from 'prop-types';

import CryptoCompareApiClient from './cryptoCompare/CryptoCompareApiClient';

class CryptoCurrencyTicker extends Component {

    static propTypes = {
        query: PropTypes.object.isRequired,
        render: PropTypes.func.isRequired
    }

    constructor(...args) {
        super(...args)
        this.state = {
            error: null,
            data: [],
            metadata: []
        }
    }
    
    fetchCryptocurrencyData(){
        let currency = this.props.query.value;

        CryptoCompareApiClient.getTopList(50, currency)
            .then(json => {
                let coinsName = json.data['Data'].map(result => {
                    return {
                        fullName: result['CoinInfo']['FullName'],
                        symbol: result['CoinInfo']['Name']
                    }              
                });
                CryptoCompareApiClient.getCoinPriceAvg(coinsName.map(coin => coin['symbol']), currency)
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
                        this.setState({data: data});  
                    }
                ).catch(error => this.setState({error}));
        }).catch(error => this.setState({error}));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 300 * 1000);
    }

    componentDidUpdate(prevProps) {
        if(this.props.query.value !== prevProps.query.value){
            this.fetchCryptocurrencyData();
        }
    }
    
    componentWillUnmount() {
        clearInterval();
    }

    render() {    
        return this.props.render({
            coins: this.state.data,
            metadata: this.state.metadata,
            error: this.state.error
        });
    }
}

export default CryptoCurrencyTicker;