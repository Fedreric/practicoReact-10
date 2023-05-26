import { Container, Col, Row} from "react-bootstrap";
import Pelicula from "./Pelicula";

const ContenedorPeliculas = ({ peliculas, borrarPelicula }) => {
  return (
    <section className="row my-5">
      <h4 className="display-5 text-center my-5">Peliculas</h4>
          {peliculas.map((pelicula,index) => (
            <article key={index} className="col-md-6 col-lg-4 mb-2">
                <Pelicula pelicula={pelicula} borrarPelicula={borrarPelicula}></Pelicula>
            </article>
          ))}
    </section>
  );
};

export default ContenedorPeliculas;
