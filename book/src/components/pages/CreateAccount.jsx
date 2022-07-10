import React ,{Component} from 'react'
import { Link } from 'react-router-dom';
import CreateAccountPassword from '../createaccount/CreateAccountPassword';

class CreateAccount extends Component {
    constructor(props){
        super(props);
        this.mySubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
    }
    render(){
        return (
        <div className='createAccount'>
            <h2 className='ms-5 py-4'>Create an account</h2>
            <div className="formdiv py-5">
                <form  onSubmit={this.onSubmit}>
                    <p><span className='text-muted'>Already have an account?</span> Log in instead!</p>
                    <div className='forminput'>
                       <div className="gender d-flex my-2">
                           <div className='social'>
                               <span>Social title</span>
                           </div>
                           <div className='genderinput'>
                               <input type="radio" name='gender' id='mr' />
                               <label htmlFor="mr"  className='me-5'>Mr.</label>
                               <input type="radio" name='gender' id='mrs' />
                               <label htmlFor="mr">Mrs.</label>
                           </div>
                       </div>
                       <div className="name my-4 d-flex">
                           <div className="namelabel">
                               <label htmlFor="name">First name</label>
                           </div>
                           <div className='nameinput'>
                               <input type="text" className='py-1' id='name' required/>
                               <p className='text-muted'>Only letters and the dot (.) character, followed by a space, are allowed.</p>
                           </div>
                           
                       </div>
                       <div className="lastname my-4 d-flex">
                           <div className="namelabel">
                               <label htmlFor="name">Last name</label>
                           </div>
                           <div className='nameinput'>
                               <input type="text" className='py-1' id='name' required/>
                               <p className='text-muted'>Only letters and the dot (.) character, followed by a space, are allowed.</p>
                           </div>
                           
                       </div>
                       <div className="email  my-4 d-flex">
                          <div className="emaillabel">
                               <label htmlFor="email">Email</label>
                           </div>
                           <div className='emailinput'>
                               <input type='email' className='py-1' id='email' required/>
                           </div>
                       </div>
                       <CreateAccountPassword />
                       <div className="birthdate my-4 d-flex">
                           <div className='birthdatelabel'>
                               <label htmlFor="birthdate">Birthdate</label>
                           </div>
                           <div className='birthdateinput'>
                               <input type="date" className='py-1 text-muted' id="birthdate" />
                               <p className='text-muted'>(E.g.: 05/31/1970)</p>
                           </div>
                           
                       </div>
                       <div className='checkinput'>
                           <label className='text-muted my-1' htmlFor="offer"><input type="checkbox" id="offer" /> Receive offers from our partners</label>
                           <label className='text-muted my-1' htmlFor="sign"><input type="checkbox" id="sign" />Sign up for our newsletter <br /> Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</label>
                           <label className='text-muted my-1' htmlFor="agree"><input type="checkbox" id="agree" required/> I agree to the terms and conditions and the privacy policy</label>
                           <label className='text-muted my-1' htmlFor="privacy"><input type="checkbox" id="privacy" required />Customer data privacy</label>
                       </div>
                    </div>
                    <button className='py-1 px-3 savebtn' type="submit">SAVE</button>
                </form>
            </div>
        </div>
      )}
  
}

export default CreateAccount