import { Button, Card } from "react-bootstrap";
const Pelicula = ({pelicula, borrarPelicula}) => {
  return (
        <Card>
          <Card.Header>
            <Card.Title>{pelicula.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Categoria: {pelicula.categoria}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Descripcion: {pelicula.descripcion}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={()=>borrarPelicula(pelicula)}>Borrar</Button>
          </Card.Footer>
        </Card>
  );
};

export default Pelicula;
