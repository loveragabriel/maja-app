import React from 'react'

export const Carrusel = () => {
  return (
    <div>
    <h2 className='text-center'>Odontología General y Disfunción Craneomandibular</h2>
    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/foto-gratis/hermosa-chica-sentada-oficina-dentista_1157-20950.jpg?w=1060&t=st=1663123032~exp=1663123632~hmac=be3db83ab29bbbd2e065755ad678ce4c4e8ac4c0fddec589bbd64d67576c398e" className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-md-block text-dark bg-gradient bg-opacity-80 rounded">
        <h5>Consultorio </h5>
        <p>Experiencia en un ambiente higienizado</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/frustrated-unhappy-woman-suffering-from-toothache_74855-3450.jpg?w=1060&t=st=1663511610~exp=1663512210~hmac=d280068510abfef869f600ae5316cdac23c8b367061c9c65c7d19c54d9e88d10" className="d-block w-100" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/foto-gratis/dentista-examinando-paciente-herramientas_107420-65429.jpg?w=1060&t=st=1663123158~exp=1663123758~hmac=5faaa5da5102aedee0bd3e6b99764959e054d43eeecd41cf1f9ab8e410e535a1" className="d-block w-100" alt="..."/>
    
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
