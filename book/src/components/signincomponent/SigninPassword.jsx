import React,{useState} from 'react'

const SigninPassword = () => {
    const [hide,setHide]=useState({type:"password" , text:"HIDE"})
    const deyis=() =>{
        setHide({type:"text" , text:"SHOW"})
    }
    const yeni=() =>{
        setHide({type:"password" , text:"HIDE"})
    }
  return (
    <div className="passworddiv">
            <div className="passwordlabel">
              <label htmlFor="password">Password</label>
            </div>
            <div className="passwordinput mb-3">
              <input id='password' className='py-1' type={hide.type} />
              <button className='py-1' onClick={deyis} onDoubleClick={yeni}>{hide.text}</button>
            </div>
     </div>
  )
}

export default SigninPassword