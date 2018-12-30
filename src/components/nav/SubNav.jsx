import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

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
                        {this.props.tabs.map((data, i) =>
                            <NavItem key={i}>
                                <NavLink className={classnames({ active: this.state.activeTab === {i}})} 
                                        onClick={() => {this.toggle({i});}} key={i}>
                                     <FontAwesomeIcon icon={data.icon}/> {data.title}
                                </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                </Container>
                <div className="main-nav-tabs-sub">
                    <Container>                 
                        <TabContent activeTab={this.state.activeTab}>
                            {this.props.tabs.map(function(data, i) { 
                                const ComponentTab = data.key
                                return (
                                    <TabPane tabId={i} key={i}>
                                        <ComponentTab cssStyle={data.cssStyle}/>
                                    </TabPane>
                                )                              
                            })}
                        </TabContent>
                    </Container>
                </div>
            </div>
        );
    }
}

export default SubNav