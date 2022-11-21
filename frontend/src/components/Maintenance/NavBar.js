import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          expand={expand}
          className="my-navbar"
        >
          <Container fluid>
            <Link to="/landing" className="brand">
              <Navbar.Brand className="brand">HoGo.</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end flex-grow-1 pe-3 offcanvas-body">
                <Link
                  to="/home-owner-entry"
                  style={{ paddingRight: '2rem', marginTop: '0.1rem' }}
                >
                  Home Owner Entry
                </Link>

                <Link
                  to="/gate-entry"
                  style={{ paddingRight: '2rem', marginTop: '0.1rem' }}
                >
                  Gate Entry
                </Link>

                <Link
                  to="/directories"
                  style={{ paddingRight: '2rem', marginTop: '0.1rem' }}
                >
                  Directory
                </Link>
                <Link
                  to="/chats"
                  style={{ paddingRight: '2rem', marginTop: '0.1rem' }}
                >
                  Forum
                </Link>
                <Link to="/pay-maintenance" style={{ marginTop: '0.1rem' }}>
                  {' '}
                  Pay Maintenance
                </Link>
                {/* <Nav.Link href="#contact-me">Pay Maintenance</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
