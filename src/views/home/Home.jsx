import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer, Header, TopNav, SubNav } from '../../components';

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <SubNav tabTitles={[{title: 'Home', icon: 'home'},
                    {title: 'Top 100', icon: 'globe'}, {title: 'Chart', icon: 'chart-bar'}]}/>
                <Footer/>
            </div>
        )
    }
}

export default Home;

