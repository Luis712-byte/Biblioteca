import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from "../assets/car1.jpg";
import foto2 from "../assets/car2.jpg";
import foto3 from "../assets/car3.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
    touchMove: false,
  };

  return (
    <Slider {...settings} className="slider">
      <div>
        <div className="slide-content">
          <img src={foto1} alt="Imagen" className="carousel-image" />
          <div className="text-overlay">
            <h5>Biblioteca</h5>
            <p>Todos los géneros que buscas están aquí</p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <img src={foto2} alt="Imagen" className="carousel-image" />
          <div className="text-overlay">
            <h5>¿No sabes qué leer?</h5>
            <p>
              En nuestro catálogo podrás encontrar incluso lo que no estás
              buscando, atrévete a explorar nuevos mundos
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <img src={foto3} alt="Imagen" className="carousel-image" />
          <div className="text-overlay">
            <h5>Conoce más</h5>
            <p>En nuestra web podrás encontrar el libro que más desees</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
