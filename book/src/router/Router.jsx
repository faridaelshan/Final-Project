import React,{Suspense} from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/pages/Home'
import Footer from '../components/static/Footer'
import Nav from '../components/static/Nav'
import Blog from "../components/pages/Blog"
import Contact from "../components/pages/Contact"
import Categories from "../components/pages/Categories"
import NotFound from "../components/pages/NotFound"
import SignIn from '../components/pages/SignIn'
import BasketPage from '../components/pages/BasketPage'
import ForgotPassword from '../components/pages/ForgotPassword'
import CreateAccount from '../components/pages/CreateAccount'
import NewAccount from '../components/pages/NewAccount'
import About from '../components/pages/About'
import AccountPage from '../components/pages/AccountPage'
import Product from '../components/pages/ShowProduct'
import BlogDetails from '../components/blog/BlogDetails'

const Router = () => {
  return (
    <Suspense fallback="...loading">        
     <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Blog} exact path="/blog"></Route>
        <Route component={Contact} path="/contact"></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Categories} path="/categories"></Route>
        <Route component={SignIn} path="/signin"></Route>
        <Route component={BasketPage} path="/basket"></Route>
        <Route component={ForgotPassword} path="/forgotpassword"></Route>
        <Route component={CreateAccount} path="/create"></Route>
        <Route component={NewAccount} path="/newaccount"></Route>
        <Route component={AccountPage} path="/account"></Route>
        <Route exact component={Product} path="/product/:id"></Route>
        <Route component={BlogDetails} path="/blog/:id"></Route>
        <Route component={NotFound} ></Route>
      </Switch>
      <Footer />
     </BrowserRouter>
    </Suspense>
  )
}

export default Router