import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderCustom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="headerContainer">
        <Navbar.Brand href="/">Gaegul_Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title="SNS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Velog</NavDropdown.Item>
              <NavDropdown.Item href="/">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">DreamAppeal</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item>WordWise</NavDropdown.Item>
                <NavDropdown.Item>WordWise - Ver2</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>IML</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderCustom;