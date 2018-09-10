import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SubNav } from '../../components';

class Coins extends Component {
    render() {
        return (
            <div>
                <SubNav tabTitles={[
                    {title: 'Home', icon: 'home'},
                    {title: 'Top 100', icon: 'globe'}, 
                    {title: 'Chart', icon: 'chart-bar'}]}/>
                <Container>
                </Container>
            </div>
        )
    }
}

export default Coins;
