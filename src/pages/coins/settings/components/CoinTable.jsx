import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

import CoinForm from './CoinForm';
import { InputField } from '../../../../components';

class CoinTable extends Component {
    
    constructor(props) {
        super(props); 

        this.state = {
            coins: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        let coin = {
            id: Math.floor(Math.random() * 999999),
            date: new Date(event.target.date.value),
            coin_token: event.target.coin_token.value,
            amount: parseFloat(event.target.amount.value),
            price: parseFloat(event.target.exchange.value),
            purchase_price: parseFloat(event.target.purchase_price.value),
            unit: event.target.unit.value
        }
        // clear input fields
        event.target.reset();
        this.state.coins.push(coin);
        this.setState(this.state.coins);
    }

    handleChange = (e, coin) => {  
        console.log(e);
        e instanceof Date ? coin.date = e : coin[e.currentTarget.name] = e.target.value;
        
        console.log(coin);
        this.state.coins.map(obj => this.state.coins.find(o => o.id === coin.id) || obj);
    }

    handleRemove = (e, coin) => {
        this.state.coins.splice(this.state.coins.indexOf(coin),1)
        this.setState({coins: this.state.coins});
    }
    
    render() {
        return (
            <div>
            <CoinForm onSubmit={this.handleSubmit}/>    
            <Table className="coinTable" borderless size="sm">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Token/Coin</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Price</th>
                        <th scope="col">Purchase price</th>
                        <th scope="col">Unit</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.state.coins).map(i => {
                        const coin = this.state.coins[i];
                        return <tr key={i}>
                            {Object.keys(coin).map( key => {
                                return <td key={i+key}>
                                    <InputField rowKey={key}
                                        row={coin}
                                        save={this.handleChange}/>
                                   </td>
                            })}    
                            <td><Button color="danger" onClick={e => this.handleRemove(e, coin)}>Remove</Button></td>  
                        </tr>
                    })}
                </tbody>
            </Table> 
            </div>
        )
    }
}

export default CoinTable;
    