import React,{useState} from 'react';
import Card from 'react-bootstrap/Card'
import { Button , ListGroup } from 'react-bootstrap';
import '../App.css';
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'

const MovieCard = ({film} , { key} ) => {
   

 




    return (

<div>



<Card style={{ width: '15rem' , marginBottom : '50px' , marginLeft:'550px' }}  >
  
  <Card.Body style={{  padding:'0px', flexDirection: 'row' }}>


  <Link to ={`MovieInfo/${film.id}`}>
   
    <Card.Img variant="top" src={film.img} />

   </Link>

    <Card.Header>{film.name}</Card.Header>
      <ListGroup variant="flush">
     
       
        <ListGroup.Item> <Rating rate={film.rate} /> </ListGroup.Item>
         </ListGroup>
  
  </Card.Body>
  <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        More information
      </Accordion.Toggle>
    </Card.Header>
   
    <Accordion.Collapse eventKey="0">
    <ListGroup.Item>
      <Card.Body>Type : {film.type}</Card.Body>
      </ListGroup.Item>
    </Accordion.Collapse>
   


    
    <Accordion.Collapse eventKey="0">
    <ListGroup.Item>
      <Card.Body>Director :<br/> {film.director}</Card.Body>
      </ListGroup.Item>
    </Accordion.Collapse>
   

 
  </Card>
 
</Accordion>
</Card> 



 
          
    </div>

    );
}

export default MovieCard;
