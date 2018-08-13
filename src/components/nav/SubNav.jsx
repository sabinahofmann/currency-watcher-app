import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import { TopCryptoCurrency } from '../../views';


class SubNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab.i) {
            this.setState({
                activeTab: tab.i
            });
        }
    }
    
    render() {
    return (
        <div className="main-sub-header">
            <Container>
                <Nav tabs>
                    {this.props.tabTitles.map((data, i) =>
                        <NavItem key={i}>
                            <NavLink className={classnames({ active: this.state.activeTab === {i}} )} 
                                    onClick={() => {this.toggle({i}); }} key={i}>
                                 <FontAwesomeIcon icon={data.icon}/> {data.title}
                            </NavLink>
                        </NavItem>
                    )}
                </Nav>
            </Container>
            <div className="main-nav-tabs-sub">
                <Container>                 
                    <TabContent activeTab={this.state.activeTab}>
                        {this.props.tabTitles.map(function(data, i) {
                            if(data.title === 'Top 100'){
                                return (
                                    <TabPane tabId={i} key={i}>
                                        <TopCryptoCurrency/> 
                                    </TabPane>
                                )
                            }
                            if(data.title === 'Home'){
                                return (
                                    <TabPane tabId={i} key={i}>
                                        <Nav>
                                            <NavItem>
                                                <NavLink href="#">
                                                    <FontAwesomeIcon icon='desktop'/> Dashboard
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">
                                                    <FontAwesomeIcon icon='cogs'/> Settings
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </TabPane>
                                )
                            }else{
                                return (
                                    <TabPane tabId={i} key={i}>
                                    </TabPane>
                                )
                            }
                        })}
                    </TabContent>
                </Container>
            </div>
        </div>
    );
  }
}

export default SubNav;