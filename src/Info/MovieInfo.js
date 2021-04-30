import React from 'react';
import {useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import { useHistory } from "react-router-dom";
import { Button , Form , Nav , NavDropdown , FormControl } from 'react-bootstrap';

const MovieInfo = ({movies}) => {

let id = useParams()
//take id in URL


let data = movies.find((el)=>
    el.id == id.id
    )

    let history = useHistory();




    return (
        <div>
      
           
           
          
           <Navbar bg="light" expand="lg">
  <Navbar.Brand style={{fontSize:30}}>Movie up</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Form inline>
    <Button onClick={() => history.push("/")} variant="outline-info">Back</Button>
   
     
    </Form>
  </Navbar.Collapse>
</Navbar>



<div style={{padding:50}}>
<iframe width={560} height={315} src={data.trailer}
 frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 allowFullScreen />
</div>

<Card>
  <Card.Header>{data.name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {data.detail}
      </p>
      
    </blockquote>
  </Card.Body>
</Card>

        </div>
    );
}

export default MovieInfo;
