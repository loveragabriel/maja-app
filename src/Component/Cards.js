import React from 'react'

export const Cards = () => {

  return (
    <div className='d-wrap '>
      <div className="card  m-3 " style={{"max-width": "540px;"}}>
  <div className="row g-0 m-3 ">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-start w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-info rounded-bottom mh-100">
        <h5 className="card-title">Limpieza</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
 <div className="card  m-3 " style={{"max-width": "540px;"}}>
  <div className="row g-0 m-3">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-info rounded-bottom">
        <h5 className="card-title">Protesis</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
 <div className="card m-3" style={{"max-width": "540px;"}}>
  <div className="row g-0  m-3">
    <div className="col-md-4">
      <img src="https://cdn.pixabay.com/photo/2018/07/10/13/30/dentist-3528684__340.jpg" className="img-fluid rounded-start w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body bg-info rounded-bottom">
        <h5 className="card-title">Cirujias</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
