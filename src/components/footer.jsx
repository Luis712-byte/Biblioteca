import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>¿Quienes somos?</h3>
          <p>
            La Biblioteca Universitaria ofrece una amplia gama de recursos y
            servicios para apoyar la investigación y el aprendizaje de los
            estudiantes. Estamos comprometidos en proporcionar un ambiente
            acogedor y recursos actualizados para el beneficio de nuestra
            comunidad académica.
          </p>
        </div>
        <div className="footer-column">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="" className="icon-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" className="icon-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="icon-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Biblioteca Interactiva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
