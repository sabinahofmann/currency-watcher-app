import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink as RoutingLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavLink,
    Nav, NavItem, NavbarBrand, Container 
} from 'reactstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import fetchPage from '../../config/redux/actions'


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
                        <NavbarBrand exact={true} to="/" tag={RoutingLink} onClick={fetchPage(this.props)}>{'ticker'.toUpperCase()}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink exact={true} to="/coins" tag={RoutingLink}>Coins</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact={true} to="/stocks" tag={RoutingLink} onClick={fetchPage(this.props)}>Stocks</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
   
const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})


const mapDispatchToProps = dispatch => ({
  fetchPage: (data) => {
    dispatch(fetchPage(data));
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNav))