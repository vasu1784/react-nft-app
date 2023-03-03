import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './../assets/logo.svg'
import Sitelogo from './../assets/Storefront.svg' 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
      
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>

        <div href="#home" className='d-flex align-items-center gap-3'>
          <Link to="/" className='d-flex gap-2'>
          <img src={Sitelogo} alt=""/>
          <img src={Logo} alt="" />
          </Link>
       
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav className='gap-lg-4'>
            <Nav.Link href="#home" className='hover-underline-animation'>Marketplace</Nav.Link>
            <NavLink to="/ranking" className='hover-underline-animation nav-link'>Rankings</NavLink>
            <Nav.Link href="#home" className='hover-underline-animation'>Connect a wallet</Nav.Link>
            <NavLink  to="/signup"><Button variant="primary navbtn">Sign Up</Button></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;