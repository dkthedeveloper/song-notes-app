import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
  return (
    <div className="my-component-container">
    <Navbar bg="light" expand="lg" style={{width:'100%', padding:'5px 20px'}}>
      <Container style={{maxWidth:'100%'}}>
        <a href="#home"><img src="https://i.ibb.co/S6wcKwb/Song-Notes-logo2.png" alt="logo" style={{width:'120px', margin:'7px 8px 0 0'}} /></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Log-In/Sign-Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
