import React from 'react'
import pay from '../../assets/img/pay-f.png'
import footerlogo from '../../assets/img/footer-logo.png'
import { Link } from 'react-router-dom'
import {AiOutlinePhone} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='row py-5 mx-0'>
        <div className='col-3 border-end border-secondary'>
          <div className='ms-5 pb-5 pt-4'>
            <Link to="/">
              <img src={footerlogo} />
            </Link>
            <h6 className='text-secondary mt-3 mb-3'>1418 River Drive, Suite 35 Cottonhall, <br /> CA 9622 United States</h6>
            <a className='text-secondary' href="https://www.google.com/maps/place/41+Newmanswalls+Ave,+Montrose+DD10+9DD,+Birl%C9%99%C5%9Fmi%C5%9F+Krall%C4%B1q/@56.5956239,-2.1205219,10z/data=!4m13!1m7!3m6!1s0x4861e2c403f2a19f:0xe7c1fad809c30714!2zxZ5vdGxhbmRpeWEsIEJpcmzJmcWfbWnFnyBLcmFsbMSxcQ!3b1!8m2!3d56.4906712!4d-4.2026458!3m4!1s0x48869a72956edd17:0x6a045b9f1b668b!8m2!3d56.7267384!4d-2.4687481"><h6>Show on map</h6></a>
          </div>
        </div>
        <div className='col-3 ps-0 '>
          <div className='pt-4 ps-4'>
            <h5 className='text-light mb-5'>Need Help</h5>
            <p className='text-light fs-5'><AiOutlinePhone className='me-2 text-danger fs-3'/>(+84)-1800-33358</p>
            <p className='text-muted ms-5'>Monday - Friday: 9:00-20:00 <br />Saturday: 11:00 - 15:00</p>
            <p className='text-muted'><FiMail className='text-danger me-2 fs-3'/>demo@demo.com</p>
          </div>
          
        </div>
        <div className='col-2'>
          <div className='pt-4'>
            <h5 className='text-light mb-5'>My Account</h5>
            <h6 className='text-muted'>My Account</h6>
            <h6 className='text-muted'>Contact</h6>
            <h6 className='text-muted'>Shopping Cart</h6>
            <h6 className='text-muted'>Shop</h6>
          </div>
        </div>
        <div className='col-2'>
          <div className='pt-4'>
            <h5 className='text-light mb-5'>Information</h5>
            <h6 className='text-muted'>Help Center</h6>
            <h6 className='text-muted'>Returns Product</h6>
            <h6 className='text-muted'>Recalls</h6>
            <h6 className='text-muted'>Accessibility</h6>
            <h6 className='text-muted'><Link to="/contact" style={{"textDecoration":"none","color":"#6c757d"}}>Contact Us</Link></h6>
            <h6 className='text-muted'>Store Pickup</h6>
          </div>
        </div>
        <div className='col-2'>
          <div className='pt-4'>
            <h5 className='text-light mb-5'>Categories</h5>
            <h6 className='text-muted'>Action</h6>
            <h6 className='text-muted'>Comedy</h6>
            <h6 className='text-muted'>Drama</h6>
            <h6 className='text-muted'>Horror</h6>
            <h6 className='text-muted'>Kids</h6>
            <h6 className='text-muted'>Romantic</h6>
            <h6 className='text-muted'>Comedy</h6>
          </div>
        </div>
      </div>
      <hr className='text-muted'/>
      <div className='container d-flex justify-content-between align-items-center py-4'>
        <p className='text-muted'>Copyright &copy; 2021 <span className='text-danger'>Bookery</span>. All Rights Reserved.</p>
        <img src={pay} />
      </div>
    </div>
  )
}

export default Footer