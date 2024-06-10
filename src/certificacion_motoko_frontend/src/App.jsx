import { useEffect, useState } from 'react';
import { certificacion_motoko_backend } from 'declarations/certificacion_motoko_backend';
import { Table } from 'react-bootstrap';

function App() {
  const [vapes, setVapes] = useState([]);
  
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
            <Card.Title>Catalogo de vapes </Card.Title>
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
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
