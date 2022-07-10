import React ,{useState} from 'react'
import logo from '../../assets/img/bookery-logo.jpg'
import {AiOutlineHeart,AiOutlineSearch,AiOutlineAlignRight} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import aze from '../../assets/img/azerbaijan.png'
import eng from '../../assets/img/1.jpg'
import dec from '../../assets/img/3.jpg'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Basket from '../pages/Basket'
import { useCart } from 'react-use-cart';
import Login from '../pages/Login'
import footerlogo from '../../assets/img/footer-logo.png'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'


const NavbarButton = () => {
  function changelanguage(e){
    i18next.changeLanguage(e)
  }
  return (
    <div className='navbarButton'>
        <div className='row'>
        <div className='col language m-2'>
            <p>LANGUAGE:</p>
            <div className='d-flex justify-content-between align-items-center'>
                <button onClick={()=>changelanguage('az')}><img className='rounded-2' style={{"width":"1.5rem"}} src={aze} /></button>
                <button onClick={()=>changelanguage('en')}><img className='rounded-2' style={{"width":"1.5rem"}} src={eng} /></button>
                <button onClick={()=>changelanguage('de')}><img className='rounded-2' style={{"width":"1.5rem"}} src={dec} /></button>
            </div>
        </div>
        <div className='col account'>
            <p className='mt-2'><Link to="/signin">Sign in</Link></p>
            <p><Link to="/account">My account</Link></p>
            <p>Wishlist 0</p>
            <p>Compare 0</p>
        </div>
        </div>
    </div>
  )
}

const Nav = () => {
  const{totalItems}=useCart();
  const {t} = useTranslation();
  const [show,setShow]=useState(false);
  const [basket,setBasket]=useState(false);
  const [login,setLogin]=useState(false);
  
  const toggleLogin=()=>{
    setLogin(!login)
  } 
  if(login) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
  return (
    <div>
      <nav className="navbar topnav navbar-expand-lg topnav p-0">
      <div className='home'><a href="#home"><AiOutlineArrowUp /></a></div>
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/">
            <img src={logo} className="lightlogo" />
            <img src={footerlogo} className="darklogo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarSupportedContent">
            <div className="input-group">
               <select id="inputGroupSelect02">
                 <option className='text-muted'>{t("Select.option0")}...</option>
                 <option className='text-muted'>{t("Select.option1")}</option>
                 <option className='text-muted'>{t("Select.option2")}</option>
                 <option className='text-muted'>--{t("Select.option3")}</option>
                 <option className='text-muted'>--{t("Select.option4")}</option>
                 <option className='text-muted'>--{t("Select.option5")}</option>
                 <option className='text-muted'>--{t("Select.option6")}</option>
                 <option className='text-muted'>--{t("Select.option7")}</option>
                 <option className='text-muted'>--{t("Select.option8")}</option>
                 <option className='text-muted'>--{t("Select.option9")}</option>
               </select>
               <input type="text" placeholder='Search' aria-label="First name" ></input>
               <button className="btn btn-outline-secondary" type="button" id="button-addon2"><AiOutlineSearch /></button>
            </div>
            <div className='buttons' id="home">
              <button className='navrightbuttons' onClick={toggleLogin}><FaRegUser /></button>
              <button className='navrightbuttons'><AiOutlineHeart /><span className='firstspan'><span className='secondspan'>0</span></span></button>
              <button onMouseLeave={()=>setBasket(false)} onMouseOver={()=>setBasket(true)} className='navrightbuttons'><BsBag style={{"color":"red"}}/><span className='firstspan'><span className='secondspan'>{totalItems}</span></span>{basket&&<Basket />}</button>
              <button className='navrightbuttons'  onMouseLeave={()=>setShow(false)} onMouseOver={()=>setShow(true)}><AiOutlineAlignRight />{show&&<NavbarButton />}</button>
            </div>
          </div>
        </div>
      </nav>
      
      <nav className="navbar bottomnav navbar-expand-lg ">
         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-secondary"><FiMenu /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><Link className="nav-link active" to="/" aria-current="page">{t("Navbar.navlink0")}</Link><div></div></li>
                  <li className="nav-item"><Link className="nav-link" to="/categories" aria-current="page">{t("Navbar.navlink1")}</Link><div></div></li>
                  <li className="nav-item"><Link className="nav-link" to="/blog" aria-current="page">{t("Navbar.navlink2")}</Link><div></div></li>
                  <li className="nav-item"><Link className="nav-link" to="/about" aria-current="page">{t("Navbar.navlink3")}</Link><div></div></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact" aria-current="page">{t("Navbar.navlink4")}</Link><div></div></li>
              </ul>
            </div>
        </div>
      </nav>
      {login&&(
              <div className="login">
                 <div onClick={toggleLogin} className="overlay"></div>
                  <div className="login-content">
                     <Login />
                     <button className="close-login" onClick={toggleLogin}>
                       x
                     </button>
                   </div>
               </div>
)}
    </div>
  )
}

export default Nav