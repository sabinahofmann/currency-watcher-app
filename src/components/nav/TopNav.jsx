import React, { Component } from 'react';
import { NavLink as RoutingLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavLink,
    Nav, NavItem, NavbarBrand, Container 
} from 'reactstrap';

class TopNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
            <div>
                <Navbar className="main-top-header" color="dark" dark expand="sm" sticky="top">
                    <Container>
                        <NavbarBrand exact={true} to="/" tag={RoutingLink}>{'ticker'.toUpperCase()}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink exact={true} to="/coins" tag={RoutingLink}>Coins</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact={true} to="/stocks" tag={RoutingLink}>Stocks</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;
