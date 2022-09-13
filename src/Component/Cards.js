import React from 'react'

export const Cards = () => {

  return (
    <div className='d-wrap '>
      <div className="card  m-3 ">
  <div className="row g-0  shadow-lg p-3 bg-body rounded">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div className="card-body  rounded-bottom align-middle ">
        <h5 className="card-title">Limpieza</h5>
        <p className="card-text">Tratamiento de limpieza que busca la eliminación de saro, placas y caries que puedan estar presenten en la zona bucal.</p>
        <p className="card-text"><small className="text-muted">Tramiento básico 30min apróximado</small></p>
      </div>
    </div>
  </div>
</div>
 <div className="card  m-3 ">
  <div className="row g-0  shadow-lg p-3 bg-body rounded">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body  rounded-bottom ">
        <h5 className="card-title">Protesis</h5>
        <p className="card-text">Estudio y analisis para realizar tu nueva sonrisa. Protesis que se adapte a tu estilo de vida. </p>
        <p className="card-text"><small className="text-muted">Tratamiento 3 sesiones</small></p>
      </div>
    </div>
  </div>
</div>
 <div className="card m-3" >
  <div className="row g-0  shadow-lg p-3 bg-body rounded">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-top w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body  rounded-bottom ">
        <h5 className="card-title">Difusión Maxilo-Facial</h5>
        <p className="card-text">Analizo las alteraciones que podrían estar causando  dolor y la difusión muscular en la mandibula, para mejorar tu estilo de vida.</p>
        <p className="card-text"><small className="text-muted">Tratamiento en 3 sesiones</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
