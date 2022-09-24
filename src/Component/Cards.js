import React from 'react'
export const Cards = () => {

  return (
    <div className='bg-dark'>
      <div className='d-wrap  '>
        <div className="card m-3" >
          <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid rounded w-90" alt="chica sonriendo " />
            </div>
            <div className="col-md-8">
              <div className="card-body  rounded-bottom ">
                <h5 className="card-title">Arreglo de Caries</h5>
                <p className="card-text">
                  El tratamiento trata la elimiación de caries y restauranción o rehabilitación del diente.
                </p>
                <p className="card-text "><small className="text-warning ">Restauraciones Directas, Indirectas y Preventivas.</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  m-3 ">
          <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
            <div className="col-md-4">
              <img src="https://cdn.pixabay.com/photo/2014/03/14/16/56/orthodontist-287285_960_720.jpg" className="img-fluid rounded w-100" alt="procedimiento de limpieza dental" />
            </div>
            <div className="col-md-8 ">
              <div className="card-body  rounded-bottom align-middle ">
                <h5 className="card-title">Limpieza</h5>
                <p className="card-text">Eliminación de placa y sarro en zonas de difícil acceso con el cepillo dental. La limpieza reduce el riesgo de enfermedad gingival.</p>
                <p className="card-text"><small className="text-warning">Tratamiento Gingival y Periodontal
                </small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  m-3 ">
          <div className="row g-0  shadow-lg p-3 bg-dark  rounded">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1612283104841-d1918e7666c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded w-100" alt="prótesis dental" />
            </div>
            <div className="col-md-8">
              <div className="card-body  rounded-bottom ">
                <h5 className="card-title">Prótesis</h5>
                <p className="card-text">Restaurar la función y la estética con el tratamiento protético indicado.</p>
                <p className="card-text"><small className="text-warning">Coronas, Prótesis Parciales Removibles y Prótesis Totales</small></p>
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
                <h5 className="card-title"> Tratamiento de Disfunción Cráneo-Mandibular</h5>
                <p className="card-text">
                  Tratamiento para aliviar las consecuencias del bruxismo, como problemas articulares y musculares.
                </p>
                <p className="card-text "><small className="text-warning ">Placas Miorrelajantes</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
