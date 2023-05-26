import { Button, Card } from "react-bootstrap";
const Pelicula = ({pelicula, borrarPelicula}) => {
  return (
        <Card className="card-pelicula">
          <Card.Header>
            <Card.Title className="display-6">{pelicula.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Categoria: {pelicula.categoria}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
              Descripcion:
            </Card.Subtitle>
            <Card.Text>
              {pelicula.descripcion}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={()=>borrarPelicula(pelicula)} variant="danger">Eliminar</Button>
          </Card.Footer>
        </Card>
  );
};

export default Pelicula;
