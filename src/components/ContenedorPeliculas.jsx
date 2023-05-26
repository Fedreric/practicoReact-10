import { Container, Col, Row} from "react-bootstrap";
import Pelicula from "./Pelicula";

const ContenedorPeliculas = ({ citas, borrarCita }) => {
  return (
    <section className="row my-5">
      <h4 className="display-5 text-center my-5">Citas pendientes</h4>
          {citas.map((cita,index) => (
            <article key={index} className="col-md-6 col-lg-4 mb-2">
                <Pelicula cita={cita} borrarCita={borrarCita}></Pelicula>
            </article>
          ))}
    </section>
  );
};

export default ContenedorPeliculas;
