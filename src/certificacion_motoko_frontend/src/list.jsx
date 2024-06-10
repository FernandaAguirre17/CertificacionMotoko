import React from "react";
import {Container, Row, col} from 'react-bootstrap'
const List = () => {
    return (
        <Container>
            <Row>
                <h1>Funciones principales de un CRUD</h1>
                <col>Agregar</col>
                <col>Eliminar</col>
                <col>Actualizar</col>
                <col>Leer</col>
                <Card>
                    <Card.Body>
                        <Card.Title>Listado de peliculas!</Card.Title>
                        <Card.Subtitle>Aqui podras encontrar un resumen de las peliculas recientemente agregadas</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default List;


