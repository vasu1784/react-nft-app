import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.jsx'
import Sitelogo from './../assets/Storefront.svg' 
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../store/themeContext';

 function Navigation() {

  const themeCtx = useContext(ThemeContext)
   
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='p-4 navcsset'>
      <Container fluid>

        <div href="#home" className='d-flex align-items-center gap-3'>
          <Link to="/" className='d-flex gap-2 svgcolor align-items-center'>
          <img src={Sitelogo} alt=""/>
           <Logo/>
          </Link>
       
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav className='gap-lg-4'>
            <Nav.Link href="#home" className='hover-underline-animation'>Marketplace</Nav.Link>
            <NavLink to="/ranking" className='hover-underline-animation nav-link'>Rankings</NavLink>
            <NavLink to="/login" className='hover-underline-animation nav-link'>Login</NavLink>
            <NavLink  to="/signup"><Button variant="primary navbtn">Sign Up</Button></NavLink>
            <div className="form-check form-switch d-flex gap-2 justify-content-center align-items-center">
  <input className="form-check-input" type="checkbox" checked={themeCtx.isDark} id="flexSwitchCheckDefault" onChange={()=>themeCtx.themeToggler()}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {themeCtx.isDark ? "LightMode": "DarkMode"}</label>
</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;