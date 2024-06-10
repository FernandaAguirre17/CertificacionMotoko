import { useEffect, useState } from 'react';
import { certificacion_motoko_backend } from 'declarations/certificacion_motoko_backend';
import { Button, Col, NavLink, Table } from 'react-bootstrap';
import { Container, Row, Card, Image } from 'react-bootstrap'; 
import { Link, useNavigate } from 'react-router-dom';



function App() {
  const [vapes, setVapes] = useState([]);
  const navigate = useNavigate()
 
  useEffect(() => {
    getVapes();
  }, []);

  function getVapes() {
   certificacion_motoko_backend.getAllVapes().then (Vapes=>{
      setVapes(Vapes);

    });
  }

  return (
    <Container fluid className = 'm-5'>
      <Row>
        <Card>
          <Card.Body>
            <Row>
              <Col>
               <Card.Title>Catalogo de vapes </Card.Title>
              </Col>
              <Col>
               <Button variant="succes" onClick={()=>navigate("/Agregar vape")}>Agregar vape</Button>
              </Col>
            </Row>
            <Table>
              <thead>
                <tr>
                <th>#</th>
                <th>Brand</th>
                <th>Taste</th>
                <th>Size</th>
                <th>Price</th>
                </tr>
              </thead>
              <tbody>

              {
               vapes.length > 0 ? 
               vapes.map((vape)=>(
                <tr>
                <td>{vape.brand}</td>
                <td>{vape.Taste}</td>
                <td>{vape.Size}</td>
                <td>{vape.Price}</td>
                </tr> 
               ))
               : <tr></tr>
              }
              </tbody>
            </Table>
            <Col xs={6} md={4}>
              <Image src="https://lacasadelpod.com/1508-large_default/vaper-desechable-sandia-fresa-ole-plus-5000-sin-nicotina-by-bud-vape.jpg" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://lacasadelpod.com/1508-large_default/vaper-desechable-sandia-fresa-ole-plus-5000-sin-nicotina-by-bud-vape.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="https://lacasadelpod.com/1508-large_default/vaper-desechable-sandia-fresa-ole-plus-5000-sin-nicotina-by-bud-vape.jpg" thumbnail />
            </Col>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;

