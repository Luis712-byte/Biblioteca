import React from "react";
import foto1 from "../assets/car1.jpg";
import foto2 from "../assets/car2.jpg";
import foto3 from "../assets/car3.jpg";
import { Container} from "react-bootstrap";

const Inicio = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={foto1} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>Biblioteca</h5>
                  <p>Todos los géneros que buscas están aquí</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={foto2} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>¿No sabes qué leer?</h5>
                  <p>
                    En nuestro catálogo podrás encontrar incluso lo que no estás
                    buscando, atrévete a explorar nuevos mundos
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={foto3} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block text-white">
                  <h5>Conoce más</h5>
                  <p>En nuestra web podrás encontrar el libro que más desees</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Inicio;
