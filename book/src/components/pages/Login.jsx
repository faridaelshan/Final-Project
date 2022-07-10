import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [forget,setForget]=useState(false);
    const toggleForget=()=>{
        setForget(!forget)
      }
  return (
    <div className='login-main d-flex flex-column'>
        <h5>Log in to your account</h5>
        <input type="email" className='py-2 mt-2' placeholder='Email Address' />
        <input type="password" className='py-2 my-3' placeholder='Password' />
        <div className='d-flex justify-content-between'>
            <div className='mb-4'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember text-muted">Remember Me</label>
            </div>
           <button className='toggle' onClick={toggleForget}>Forgot Password</button>
        </div>
        <button className='py-2 loginbtn'>Login</button>
        <Link className='mt-2 account' to="/newaccount">No account? Create one here</Link>
       <hr />
        {forget&&(<div className='forgot  d-flex flex-column'>
          <h5>Reset Password</h5>
          <input type="email" className='py-2 my-2' placeholder='Email Address' />
          <button className='py-2 resetbtn'>Reset Password</button>
        </div>)}
    </div>
  )
}

export default Login