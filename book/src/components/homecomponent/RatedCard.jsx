import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const RatedCard = props => {
  return (
    <div className="card py-2 mx-3 ps-4 mt-0 ratedcard">
    <div className="row g-0">
      <div className="col-md-4">
      <div className='container beforehover'>
            <img style={{"width":"14rem"}}  src={props.img} />
          </div>
          <div className='container afterhover mt-2'>
            <img style={{"width":"14rem"}}  src={props.hoverimg} />
          </div>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h6 className='text-muted'>{props.category}</h6>
          <h4 className='card-title'>{props.title}.</h4>
          <p>{props.desc}</p>
          <div className='d-flex text-muted mt-2'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className='d-flex mt-2'>
            <span className='text-decoration-line-through me-2'>{props.sale}</span>
            <h5 className='text-danger'>${props.price}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RatedCard