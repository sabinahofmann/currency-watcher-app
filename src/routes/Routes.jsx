import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TopCryptoCurrency, Home, Coins, Settings } from '../pages';
import { TOP_COINS, HOME, SETTING_COINS, COINS } from '../config/redux/constants/page-types';
import { fetchPage } from '../config/redux/actions';
import TopNav from '../components/nav/TopNav';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Routes = () => (
    <div>    
        <TopNav/>
        <Switch>
            <Route exact path={HOME} component={Home}/>
            <Route path={COINS} component={Coins}/>
            <Route path={TOP_COINS} component={TopCryptoCurrency}/>
            <Route path={SETTING_COINS} component={Settings}/>
            <Route path="/*" component={()=><h1>NOT FOUND!</h1>} status={404}/>
            <Redirect to={HOME} />
        </Switch>
    </div>
)

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps)(Routes))