import React from 'react'

const Inicio = () => {
  return (
    <div className='container'>
    <div className="row">
      <div className="col-12">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./public/car1.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Biblioteca</h5>
        <p>Todos los generos que buscas estan aqui</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./public/car2.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block" >
        <h5>¿No sabes que leer?</h5>
        <p>En nuestro catalogo podras encontrar incluso lo que no estas buscando, atevete a ecplorar nuevos mundos </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./public/car3.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Conoce mas</h5>
        <p>En nuestra web podras encontrar el libro que mas desees</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    
      </div>
    </div>


  </div>
  )
}

export default Inicio