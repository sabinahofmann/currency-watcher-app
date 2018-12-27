import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { TopCryptoCurrency, Home, Coins, Settings } from '../pages'
import { TOP_COINS, HOME, SETTING_COINS, COINS } from "../config/redux/constants/page-types";


const Routes = ({ store }) => (
    <Provider store={store}>
        <Switch>
            <Route exact path={HOME} component={Home}/>
            <Route path={COINS} component={Coins}/>
            <Route path={TOP_COINS} component={TopCryptoCurrency}/>
            <Route path={SETTING_COINS} component={Settings}/>
            <Route path="/*" component={()=><h1 style={{color:'red'}}>NOT FOUND!</h1>} status={404} />
            <Redirect to={HOME} />
        </Switch>
    </Provider>
)

Routes.propTypes = {
  store: PropTypes.object
}

export default Routes;
    