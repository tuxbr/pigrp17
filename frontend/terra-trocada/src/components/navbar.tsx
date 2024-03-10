import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';

const NavbarLinks = () => {
  // Path atual da rota
  const { pathname } = useRouter();

  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/img/logotipo.png"
            alt="Terra Trocada"
            width="150"
            className="mr-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/cadastro" className={`nav-link ${pathname === '/cadastro' ? 'active' : ''}`}>
              Cadastro
            </Link>
            <Link href="/contato" className={`nav-link ${pathname === '/contato' ? 'active' : ''}`}>
              Contato
            </Link>
            <Link href="/proposito" className={`nav-link ${pathname === '/proposito' ? 'active' : ''}`}>
              Nosso Propósito
            </Link>
            <Link href="/quem-somos" className={`nav-link ${pathname === '/quem-somos' ? 'active' : ''}`}>
              Quem Somos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLinks;