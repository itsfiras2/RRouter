import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Button , Form , Nav , NavDropdown , FormControl } from 'react-bootstrap';
import Rating from '../Rating/Rating'
const NavBar = ({setName , setSearch , search}) => {







    return (
        <div>


          
            <Navbar bg="light" expand="lg">
  <Navbar.Brand style={{fontSize:30}}>Movie up</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" 
      onChange={(e)=> setName(e.target.value)}
      />
      <Rating setRate={setSearch} rate={search} />
     
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}

export default NavBar;
