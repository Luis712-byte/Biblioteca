import React from 'react';

const Footer = () => {
  const getRandomEmail = () => {
    const domains = ['example.com', 'test.com', 'foo.com'];
    const randomIndex = Math.floor(Math.random() * domains.length);
    return `info@${domains[randomIndex]}`;
  };

  return (
    <footer className="footer bg-danger text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <br></br>
            <h4>Contacto</h4>
            <p>
              Para cualquier consulta, puedes comunicarte con nosotros a través de los siguientes correos electrónicos:
            </p>
            <ul>
             <li>LuisAcosta@gmail.com</li>
              <li>JulianEcheverria@gmail.com</li>
              <li>CarlosZea@gmail.com</li>
            </ul>
          </div>
        
          <div className="col-md-6">
          <br></br>
            <h4>Biblioteca Universitaria</h4>
            <p>
              La Biblioteca Universitaria ofrece una amplia gama de recursos y servicios para apoyar la investigación y el aprendizaje de los estudiantes. Estamos comprometidos en proporcionar un ambiente acogedor y recursos actualizados para el beneficio de nuestra comunidad académica.
            </p>
            <h5>Integrantes:</h5>
            <ul>
              <li>Luis Acosta</li>
              <li>Julian Echeverria</li>
              <li>Carlos Zea</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="mb-0">© 2023 Biblioteca Universitaria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
