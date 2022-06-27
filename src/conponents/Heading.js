import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav , NavItem, NavbarBrand,Container  } from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
        <Container>
                <NavbarBrand href="/"> Mon Equipe   
                <Link className="btn btn-primary" to="/add"> Ajouter utilisateur</Link>
                </NavbarBrand>
                <Nav>
                    <NavItem></NavItem>
                </Nav>
        </Container>
    </Navbar>
  )
}
