import React, { Component } from 'react';
import { Footer, TopNav } from './components';
import Routes from './routes/Routes';
import store from './config/redux/store'

class App extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <Routes store={store}/>
                <Footer/>
            </div>
        );
    }
}

export default App;