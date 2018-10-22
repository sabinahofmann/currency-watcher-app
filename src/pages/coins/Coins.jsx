import React, { Component } from 'react';
import { SubNav } from '../../components';
import { TopCryptoCurrency, Settings, CryptoCharts } from '../../pages'


class Coins extends Component {
    
    render() {
        const tabs = [
            { key: Settings, icon: 'home', title: 'Home', cssStyle: 'mt-4 mb-4' },
            { key: TopCryptoCurrency, icon: 'globe', title: 'Top 100', cssStyle: 'mt-4 mb-4' },
            { key: CryptoCharts, icon: 'chart-bar', title: 'Chart', cssStyle: 'mt-4 mb-4' },
            { key: Settings, icon: 'cogs', title: 'Settings', cssStyle: 'mt-4 mb-4'}
        ]
        
        return (
            <div>
                <SubNav tabs={tabs}/>
            </div>
        )
    }
}

export default Coins;
