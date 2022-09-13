import React from 'react'

export const Carrusel = () => {
  return (
    <div>
    <h2 className='text-center'>Odontología General y Maxilofacial</h2>
    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block text-dark bg-light bg-gradient bg-opacity-80 rounded">
        <h5>Consultorio </h5>
        <p>Experiencia en un ambiente higienizado</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990__340.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block text-dark bg-light bg-gradient bg-opacity-80 rounded">
        <h5>Experiencia</h5>
        <p>Tratamiento de los principales problemas bucales</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/08/06/07/12/dentist-2589771__340.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block text-dark bg-light bg-gradient bg-opacity-80  rounded">
        <h5>Experiencia</h5>
        <p>Tramientos para una buena salud bocal</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
