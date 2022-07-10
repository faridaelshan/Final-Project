import React from 'react'
import error from '../../assets/img/error.gif'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img src={error} style={{"width":"50%"}} />
    </div>
  )
}

export default NotFound