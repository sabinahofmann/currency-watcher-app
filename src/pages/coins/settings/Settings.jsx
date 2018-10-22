import React, { Component } from 'react';
import { Container } from 'reactstrap';

import CoinTable from './components/CoinTable';

class Settings extends Component {
    
    constructor(props) {
        super(props); 

        this.state = { }
    }
    
    render() {
        return (
            <Container className={this.props.cssStyle}>
                <CoinTable/>
            </Container>
        )
    }
}

export default Settings;
  
