import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand href="/login">HaaS PoC App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {false && (
            <Navbar.Text>
              Signed in as: <a href="#login">Null</a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
