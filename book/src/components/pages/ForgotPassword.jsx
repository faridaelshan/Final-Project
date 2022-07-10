import React,{Component} from 'react'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { Link } from 'react-router-dom'

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.mySubmit = this.onSubmit.bind(this);
}
onSubmit(e){
    e.preventDefault();
}
render(){
  return (
    <div className='forgotpassword'   onSubmit={this.onSubmit}>
         <h2 className='ms-5 py-4'>Forgot your password?</h2>
         <div className='forgotform'>
         <form>
            <p className='text-muted'>Please enter the email address you used to register. You will receive a temporary link to reset your password.</p>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="text" className='py-2' id='email' required/>
                <button className='px-3 py-2' type='submit'>SEND RESET LINK</button>
            </div>
         </form>
         </div>
         <button className='my-5'><MdKeyboardArrowLeft /><Link to="/signin">Back to Login</Link></button>
    </div>
  )
}
}

export default ForgotPassword