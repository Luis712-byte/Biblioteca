import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import foto from "../assets/cucLogo.png";

const Navbar = (props) => {
  const navigate = useNavigate();

  const cerrarsesion = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  const Admin = () => {
    navigate("/admin");
  };

  const Libros = () => {
    navigate("/libros");
  };

  const pedidos = () => {
    navigate("/pedidos");
  };
  return (
    <Nav class="navbar bg-primary">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={foto} width="40" height="40"></img>
        </Link>

        <div className="d-flex">
          {props.firebaseUser !== null && props.firebaseRol === "Admin" ? (
            <button className="btn btn-dark me-2" onClick={Admin}>Registro</button>
          ) : null}

          {props.firebaseUser !== null && props.firebaseRol === "Usuario" ? (
            <Link className="btn btn-dark me-2" to="/libros">
              Libros Disponibles
            </Link>
          ) : null}

          {props.firebaseUser !== null && props.firebaseRol === "Usuario" ? (
            <Link className="btn btn-dark me-2" to="/pedidos">
              Mis pedidos
            </Link>
          ) : null}

          {props.firebaseUser !== null ? (
            <button
              className="btn btn-dark iniciar-cerrarsesion"
              onClick={cerrarsesion}
            >
              Cerrar Sesión
            </button>
          ) : (
            <Link className="btn btn-dark" to="/login">
              Login
            </Link>
          )}
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
