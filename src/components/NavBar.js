import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'reactstrap';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import MyCollections from './MyCollections';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const NavBar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ArticleCloud</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Shared By Others</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/myCollection">My Collection</Link>
            
              </NavItem>
            <div>
                 <Button color="primary" outline>
                    Notifications <Badge color="secondary">4</Badge>
                    </Button>
            </div>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
              <Route path="/myCollection" component={MyCollections}/>
            </Switch>
      </div>
    </Router>
  );
}
export default NavBar;