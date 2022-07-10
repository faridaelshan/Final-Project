import React from 'react'

const Keepcard = props => {
  return (
    <div className="card py-2 mx-3 ps-4 mt-0 col-5">
    <div className="row g-0">
      <div className="col-md-4">
      <div className='container beforehover'>
            <img style={{"width":"5rem"}}  src={props.img} />
          </div>
          <div className='container afterhover mt-2'>
            <img style={{"width":"5rem"}}  src={props.hoverimg} />
          </div>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h6 className='card-title'>{props.title}.</h6>
          <p className='text-muted'>{props.category}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Keepcard