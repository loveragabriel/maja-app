import React from 'react'
export const Cards = () => {

  return (
    <div className='bg-dark'>
    <div className='d-wrap  '>
      <div className="card  m-3 ">
        <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2014/03/14/16/56/orthodontist-287285_960_720.jpg" className="img-fluid rounded w-100" alt="..." />
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
            <img src="https://images.unsplash.com/photo-1612283105859-6e2585710acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80" className="img-fluid rounded w-100" alt="..." />
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
            <img src="https://img.freepik.com/free-photo/dentistry-healthy-lifestyle-illness-concept-portrait-stressed-young-female-suffering-from-severe-pain-holding-hand-her-cheek-closing-eyes-having-bad-tooth-ache-while-pills-work_343059-1430.jpg?w=1060&t=st=1663511476~exp=1663512076~hmac=1364fb0958881c636cad6356bd29af48567a71669ae3fc5bee2335f1cf51cc40" className="img-fluid rounded w-100" alt="..." />
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
