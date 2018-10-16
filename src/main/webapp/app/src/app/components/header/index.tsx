import * as React from 'react';
import { NavItem, MenuItem, Navbar, NavDropdown, Nav } from 'react-bootstrap';

export interface IHeaderProps {
}

export interface IHeaderState {
  menuOpen: boolean;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div id="app-header">
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/register" >
            Register
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
      </div>
    );
  }
}
