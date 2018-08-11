import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer, Header, TopNav, SubNav } from '../../components';
import { Cryptocurrency } from '../../views';

class Home extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <SubNav/>
                <Container className="container-fluid">
                    <Cryptocurrency/> 
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Home;

