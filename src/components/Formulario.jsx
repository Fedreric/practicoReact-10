import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import { useState, useEffect } from "react";
import ContenedorPeliculas from "./ContenedorPeliculas";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  let peliculasLS = JSON.parse(localStorage.getItem("listaPeliculas")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLS);

  useEffect(() => {
    localStorage.setItem("listaPeliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const borrarPelicula = (peliculaEliminar) => {
    let peliculasFiltrada = peliculas.filter((pelicula) => pelicula !== peliculaEliminar);
    setPeliculas(peliculasFiltrada);
  };

  const minLengthYMaxLenghth = (valor, min, max) => {
    if (valor.length >= min && valor.length <= max) {
      return true;
    } else {
      return false;
    }
  };
  const sumarioValidaciones = (
    nombre,
    descripcion,
    categoria
  ) => {
    let error = "";
    if (!minLengthYMaxLenghth(nombre, 3, 40)) {
      error += "Ingresa un nombre correcto (min:3 max:40 letras)\n";
    }
    if (!minLengthYMaxLenghth(descripcion, 10, 400)) {
      error += "Ingresa una descripcion correcta (min:10 max:500 letras)\n";
    }
    if (categoria ==='') {
      error += "Selecciona una categoria\n";
    }

    if (error.length !== 0) {
      return error;
    } else {
      return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sumario = sumarioValidaciones(
      nombre,
      descripcion,
      categoria
    );
    if (sumario.length === 0) {
      const nuevaPelicula = {
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria
      };
      setPeliculas([...peliculas, nuevaPelicula]);
      setNombre("");
      setDescripcion("");
      setCategoria("");
    } else {
      alert(sumario);
    }
  };

  return (
    <Container>
      <h1 className="display-1 text-center mb-5">Administrador de peliculas</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <FloatingLabel controlId="nombre" label="Nombre de la pelicula">
            <Form.Control
              type="text"
              placeholder="Nombre de pelicula"
              minLength={3}
              maxLength={40}
              required
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              id="nombre"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <FloatingLabel controlId="descripcion" label="Descripcion">
            <Form.Control
            className="text-area"
              as="textarea"
              placeholder="Nombre del dueño"
              minLength={10}
              maxLength={400}
              required
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
              id="descripcion"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
            <Form.Select
              required
              onChange={(e) => setCategoria(e.target.value)}
              value={categoria}
              id="categoria"
            >
              <option>Categoria 1</option>
              <option>Categoria 2</option>
              <option>Categoria 3</option>
            </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {/* <ContenedorPeliculas citas={citas} borrarCita={borrarCita}></ContenedorPeliculas> */}
    </Container>
  );
};

export default Formulario;
