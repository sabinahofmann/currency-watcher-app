import React, { Component } from 'react';
import { Footer, Header, TopNav, SubNav } from './components';
import Routes from './routes/Routes';

class App extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <Routes/>
                <Footer/>
            </div>
        );
    }
}

export default App;