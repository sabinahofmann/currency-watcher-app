import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { TopCryptoCurrency, Home, Coins, Settings } from '../pages'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/coins' component={Coins}/>
        <Route path='/coins/top' component={TopCryptoCurrency}/>
        <Route path='/coins/settings' component={Settings}/>
        <Redirect to="/" />
    </Switch>
)

export default Routes;
    