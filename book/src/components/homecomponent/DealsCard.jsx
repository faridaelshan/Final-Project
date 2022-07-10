import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const DealsCard = props => {
  return (
    <div className="card py-2 mt-0 dealscard"  style={{"width":"90%"}}>
    <div className="row g-0">
      <div className="col-4">
      <div className='container beforehover'>
            <img style={{"width":"7rem"}}  src={props.img} />
          </div>
          <div className='container afterhover mt-2'>
            <img style={{"width":"7rem"}}  src={props.hoverimg} />
          </div>
      </div>
      <div className="col-8">
        <div className="card-body">
        <h6 className='text-muted'>{props.category}</h6>
          <h6 className='card-title'>{props.title}.</h6>
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

export default DealsCard