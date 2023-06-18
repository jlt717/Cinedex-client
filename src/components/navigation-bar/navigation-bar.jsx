import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut, handleSearchInput }) => {
  return (
    <Navbar style={{ backgroundColor: "#66FCF1", width: "100%" }} expand="lg">
      <Container>
        <Navbar.Brand
        //className="align-left"
          style={{ color: "#1F2833", fontSize: "30px", textAlign: "left" }}
          as={Link}
          to="/"
        >
          CineDEX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar=nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Register
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/users">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Form>
              <Form.Control
                id="search-bar"
                style={{ backgroundColor: "#0B0C10", color: "#C5C6C7" }}
                type="text"
                placeholder="Search..."
                className="mr-sm-2 mx-2"
                onChange={handleSearchInput}
              />
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
