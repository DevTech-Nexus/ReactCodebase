import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";


import './Styles.css';



export default function Navigationbar(){
  const location = useLocation();

  // Hide navbar on login page
  if (location.pathname === '/Dashboard') {
    return null;
  }
  else if(location.pathname === '/Admin'){
    return null;
  }
  
  return(
    //  <Router>



  

<div >
<Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand  style={{ color:'#FFFFFF' }} href="#" className='logo'>Expert Mobilel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Links'  style={{ color:'#FFFFFF' }} href="/Home">Home</Nav.Link>
            <Nav.Link className='Links' style={{ color:'#FFFFFF' }} href="/Shop">Shop</Nav.Link>
            <Nav.Link className='Links'  style={{ color:'#FFFFFF' }}href="/About">About</Nav.Link>
            <Nav.Link className='Links' style={{ color:'#FFFFFF' }} href="/Admin">Admin</Nav.Link>
        
            

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="outline-success">Search</Button>
            <a href='/Cart'><img 
          className='cart'
          src="https://th.bing.com/th/id/R.22a468f2a23252fe251834f6fa559645?rik=NMt%2fVFuJ%2fdJV2A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f06%2fshopping-cart-icon-white_235863.png&ehk=iOQPHRjP2Yr4csqVdX6Bs7D8GFTrr2r9icBq9odkO7I%3d&risl=&pid=ImgRaw&r=0"
          alt="Shopping Cart"
        /></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      
      </div>
   



  );
}
