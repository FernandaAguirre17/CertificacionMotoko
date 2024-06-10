import {React, useState} from "react";
import  {Form }  from "react-bootstrap";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

const Create = () => { 
   const [tittle, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [rating, setRating] = useState("");




   return(
      <Container className='m-5'>
         <Row>
            <Col>
              <Card>
                 <Card.Title>Agrega Vape</Card.Title>
                 <Card.Body>
                    <Form>
                      <Form.Group className="mb-5">
                         <Form.Label>Ingresa el Sabor</Form.Label>
                         <Form.Control type="textarea" placeholder="Ingresa el Sabor"/>
                      </Form.Group>
                      <Form.Group className="mb-5">
                         <Form.Label>Ingresa la marca</Form.Label>
                         <Form.Control type="text" placeholder="Ingresa la marca"/>
                      </Form.Group>
                      <Form.Group className="mb-5">
                         <Form.Label>Ingresa el Tamaño</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el Tamaño"/>
                      </Form.Group>
                      <Form.Group className="mb-5">
                         <Form.Label>Ingresa el Precio</Form.Label>
                        <Form.Control as="number" placeholder="Ingresa el Precio"/>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                       Guardar
                      </Button>
                     </Form>
                 </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
};


export default Create;