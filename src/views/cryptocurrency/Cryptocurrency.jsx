import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import CurrencyTable from './components/CurrencyTable';
import CurrencyInfo from './components/CurrencyInfo';
import CurrencyTicker from '../../utils/CurrencyTicker';


class Cryptocurrency extends Component {
    
    constructor(props) {
        super(props);           
        this.state = {
            value: 'USD',
            icon: 'dollar-sign',
            currentPage: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
    }
    
    handleClick(event) { 
        switch(event.currentTarget.value){
            case 'USD': return this.setState({value: 'USD', icon: 'dollar-sign'});
            case 'EUR': return this.setState({value: 'EUR', icon: 'euro-sign'});
            case 'BTC': return this.setState({value: 'BTC', icon: ['fab', 'btc']});
            default:
                return console.warn(`No case for event type "${event.currentTarget.value}"`);
        }
    }

    handlePagination(e, index) {
        if(e && e.preventDefault) e.preventDefault();
        this.setState({ currentPage: index });
    }
    

    render() {        
        const { currentPage} = this.state;

        return (
            <CurrencyTicker query={{ value: this.state.value}} render={({ coins, metadata }) => {        
                return <div> 
                    <Row>
                        <Col sm="2">
                            <CurrencyInfo metadata={metadata['timestamp']} onClick={this.handleClick}/>
                         </Col>
                         <Col sm="10">
                             <CurrencyTable 
                                 coins={coins}
                                 convert={this.state.icon}
                                 currentPage={currentPage || 0} 
                                 pageSize={10}
                                 totalCount={coins.length}
                                 onClick={this.handlePagination}
                                 />
                         </Col>
                    </Row>
                </div>
            }}/>
        );
    }
}

export default Cryptocurrency;