import React from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Footer } from './components';
import Routes from './routes/Routes';

const App = ({ history }) => {
  return (
    <div>
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
        <Footer/>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
