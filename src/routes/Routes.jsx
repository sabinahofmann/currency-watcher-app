import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { TopCryptoCurrency, Home, Coins } from '../views'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/coins' component={Coins}/>
        <Route path='/coins/top' component={TopCryptoCurrency}/>
        <Redirect to="/" />
    </Switch>
)

export default Routes;
    