import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa flag-icon flag-icon-gb"></i>
                <b className="caret"></b>
                <p className="hidden-lg hidden-md">Language</p>

            </div>
        );
        return (
            <div>
                <Nav>
                    <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>English</MenuItem>
                        <MenuItem eventKey={2.2}>Italiano</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                </Nav>

            </div>
        );
    }
}

export default HeaderLinks;
