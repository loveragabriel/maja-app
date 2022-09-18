import React from 'react'
export const Cards = () => {

  return (
    <div className='bg-dark'>
    <div className='d-wrap  '>
      <div className="card  m-3 ">
        <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..." />
          </div>
          <div className="col-md-8 ">
            <div className="card-body  rounded-bottom align-middle ">
              <h5 className="card-title">Limpieza</h5>
              <p className="card-text">Se trata la eliminación de sarro y pequeñas manchas presentes en las piezas dentales.</p>
              <p className="card-text"><small className="text-muted">Tratamiento básico</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="card  m-3 ">
        <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body  rounded-bottom ">
              <h5 className="card-title">Protesis</h5>
              <p className="card-text">Estudio y analisis bucal para obtener piezas dentales que garanticen una sonrisa natural</p>
              <p className="card-text"><small className="text-muted">Tratamiento intermedio</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3" >
        <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body  rounded-bottom ">
              <h5 className="card-title">Disfunción Craneo Mandibular</h5>
              <p className="card-text">Analizo las alteraciones que podrían estar causando  dolor y la difusión muscular en la mandibula, para mejorar tu estilo de calidad de vida.</p>
              <p className="card-text"><small className="text-muted">Tratamiento avanzado</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
