import React,{useState} from 'react';
import { Button, Col , Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Rating from '../Rating/Rating'

const AddMovie = ({movies , setMovies}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   // const [name, setName] = useState('');
    // const [img, setImg] = useState('');
    // const [type, setType] = useState('');
    const [rate, setRate] = useState(0);


// const handleChange =(e)=> {
//     let newmovie ={
//         name : name ,
//         type : type  ,
//         img : img  ,
//         rate : rate , 
//         id : Math.random()
//     }
//     addmv(newmovie)
//     setShow(false)
//     setName('')
//     setType('')
//     setImg('')
//     setRate(0)
// }


const addItem =(e)=>{
  setMovies([...movies, {
      id: movies.length,
      img:(document.getElementById("img").value),
      name:(document.getElementById("name").value),
      type:(document.getElementById("type").value),
      director:(document.getElementById("director").value),
      rate : rate 
  }])
  setShow(false);
   
}


    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Form>
        <Form.Group as={Row} >
    <Form.Label column sm="4">
      Name Movie :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Put Name Movie" id="name" 
      // value={name} required
      // onChange={(e)=>setName(e.target.value)}
      
      />
    </Col>
    
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Type Movie :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Put Type Movie" id="type"  
      // value={type} required
      // onChange={(e)=>setType(e.target.value)}
      
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Image Movie :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Put Image Movie" id="img"
      //  value={img} 
      // onChange={(e)=>setImg(e.target.value)}
      />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="4">
      Director Movie :
    </Form.Label>
    <Col sm="7">
      <Form.Control type="text" placeholder="Put Director Movie" id="director"
      //  value={director} 
      // onChange={(e)=>setDirector(e.target.value)}
      />
    </Col>
  </Form.Group>



    <Col sm="8">
       
      <Rating rate={rate} setRate={setRate}  />
    </Col>


</Form>

       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default AddMovie;
