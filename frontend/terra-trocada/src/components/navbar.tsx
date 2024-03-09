import React from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarLinks = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/cadastro" className="nav-link">
            Cadastro
          </Link>
          <Link href="/contato" className="nav-link">
            Contato
          </Link>
          <Link href="/proposito" className="nav-link">
            Nosso Propósito
          </Link>
          <Link href="/quem-somos" className="nav-link">
            Quem Somos
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLinks;