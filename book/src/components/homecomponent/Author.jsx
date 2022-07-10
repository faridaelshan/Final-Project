import React from 'react'
import {TiContacts} from 'react-icons/ti'

const Author = props => {
  return (
    <div className='row my-4 d-flex flex-row'>
        <div className="col-3">
            <img src={props.img}  />
        </div>
        <div className='col-7'>
           <h5>{props.name}</h5> 
        </div>
        <div className='col-2'>
            <TiContacts style={{"color":"rgb(247, 109, 96)","fontSize":"1.5rem"}}/>
            
        </div>
    </div>
  )
}

export default Author