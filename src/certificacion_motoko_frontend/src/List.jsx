import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'
const List = () => {
    return (
        <Container>
            <Row>
                <h1>Funciones principales de un CRUD</h1>
                <Col>Agregar</Col>
                <Col>Eliminar</Col>
                <Col>Actualizar</Col>
                <Col>Leer</Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Catalogo de vapes </Card.Title>
                        <Card.Subtitle>Aqui podras encontrar una gran variedad de nuestros productos</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default List;




