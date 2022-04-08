import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Navbar bg="warning" expand="lg">
            <Navbar.Brand as={Link} to={"/"}>Што гэта за покемон?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}></Nav.Link>
                <Nav.Link as={Link} to={"/about"}>Аб чым</Nav.Link>
                <NavDropdown title="Больш інфармацыі" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/pokemon_evolution"}>Эвалюцыя пакемонов</NavDropdown.Item>
                  <NavDropdown.Item href="#pokemon/3.3">Месца пражывання пакемонаў</NavDropdown.Item>
                  <NavDropdown.Item href="#pokemon/3.3">
                    <NavDropdown.Item href="#pokemon/3.3">Месца пражывання пакемонаў</NavDropdown.Item></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#pokemon/3.4">Кантакты</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Пошук"
                  className="me-2"
                  aria-label="Search"
                />
                <Button as={Link} to={"/search"}>Go</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
        </div>
      </nav>

    );
  }
}
export default NavBar;