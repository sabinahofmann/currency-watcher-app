import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
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
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
        <div className="main-sub-header">
            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '0' })}
                          onClick={() => { this.toggle('0'); }} >
                            <FontAwesomeIcon icon='home'/> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggle('1'); }}
                        >
                            <FontAwesomeIcon icon='globe'/> Top 100
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                        >
                          <FontAwesomeIcon icon='chart-bar'/> Chart
                      </NavLink>
                    </NavItem>
                </Nav>
            </Container>
            <div className="main-nav-tabs-sub">
                <Container>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="0">
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
                        <TabPane  tabId="1">
                            <Row>
                              <Col sm="12">
                              </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        </div>
    );
  }
}

export default SubNav;