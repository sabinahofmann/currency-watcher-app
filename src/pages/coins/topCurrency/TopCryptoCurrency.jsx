import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import CurrencyTable from './components/CurrencyTable';
import CurrencyInfo from './components/CurrencyInfo';
import CurrencyTicker from '../../../utils/crypto/CurrencyTicker';


class TopCryptoCurrency extends Component {
    
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
        const { currentPage } = this.state;

        return (
            <Container className={this.props.cssStyle}>
                <CurrencyTicker query={{ value: this.state.value}} render={({ coins, timestamp }) => {        
                    return <div> 
                        <Row>
                            <Col sm="2">
                                <CurrencyInfo lastUpdate={timestamp} onClick={this.handleClick}/>
                            </Col>
                            <Col sm="10">
                                <CurrencyTable
                                    unit={this.state.value}
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
            </Container>
        );
    }
}

export default TopCryptoCurrency;
