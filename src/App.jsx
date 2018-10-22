import React, { Component } from 'react';
import { Footer, TopNav } from './components';
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