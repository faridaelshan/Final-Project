import React,{useState} from 'react'

const CreateAccountPassword = () => {
    const [hide,setHide]=useState({type:"password" , text:"HIDE"})
    const deyis=() =>{
        setHide({type:"text" , text:"SHOW"})
    }
    const yeni=() =>{
        setHide({type:"password" , text:"HIDE"})
    }
  return (
    <div className="password  my-4 d-flex">
        <div className="passwordlabel">
             <label htmlFor="password">Password</label>
         </div>
         <div className='passwordinput'>
             <input type={hide.type} className='py-1' id='password' required/>
             <button className='py-1' onClick={deyis} onDoubleClick={yeni}>{hide.text}</button>
         </div>
    </div>
  )
}

export default CreateAccountPassword