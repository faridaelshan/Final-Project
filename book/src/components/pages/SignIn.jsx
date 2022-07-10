import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import SigninPassword from '../signincomponent/SigninPassword';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.mySubmit = this.onSubmit.bind(this);
 }
  onSubmit(e){
    e.preventDefault();
 }
 render(){
  return (
    <div className='signin'>
        <h2 className=''>Log in to your account</h2>
      <div className='sign p-2'>
        <form  onSubmit={this.onSubmit}>
          <div className="emailDiv my-4 ">
            <div className="emaillabel">
              <label htmlFor="email">Email</label>
            </div>
            <div className="emaolinput my-2">
              <input type="email" className='py-1' name="" id="email" />
            </div>
          </div>
          <SigninPassword />
          <Link to="/forgotpassword">Forgot your password?</Link>
          <button className='mt-3 signbtn'>SIGN IN</button>
          <hr />
          <Link to="/create">No account? Create one here</Link>
        </form>
      </div>
    </div>
)
 }
}

export default SignIn