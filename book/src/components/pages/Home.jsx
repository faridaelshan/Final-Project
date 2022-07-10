import React  from 'react'
import Data from '../../Data/Data'
import Card from '../homecomponent/Card'
import dealsimg from '../../assets/img/deals.jpg'
import DealsCard from '../homecomponent/DealsCard'
import RatedCard from '../homecomponent/RatedCard'
import Featured from '../homecomponent/Featured'
import bh03 from '../../assets/img/bh03.jpg'
import ch01 from '../../assets/img/ch01.jpg'
import ch02 from '../../assets/img/ch02.jpg'
import ch03 from '../../assets/img/ch03.jpg'
import Keepcard from '../homecomponent/Keepcard'
import book1 from '../../assets/img/open-book.png'
import user from '../../assets/img/account.png'
import book2 from '../../assets/img/openbook.png'
import book3 from '../../assets/img/book.png'
import slide from '../../assets/img/slider.jpg'
import Authors from '../homecomponent/Authors'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Home = () => {
  return (
    <div className='home'>
      <section className='slidersection'>
         <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active" data-bs-interval={10000}>
               <img src={slide} className="d-block w-100" alt="..." />
               <div className="carousel-caption text-end d-none d-md-block">
                <div className='caruseltext'>
                  <h6>THE BOOK EDITERS</h6>
                  <h1>The All Time Classics</h1>
                  <h2 className='text-danger'>$19,99&up</h2>
                  <button className='px-3 py-2'><Link to="/shop">Shop Now</Link></button>
                </div>
               </div>
             </div>
             <div className="carousel-item" data-bs-interval={2000}>
               <img src={slide} className="d-block w-100" alt="..." />
               <div className="carousel-caption text-end d-none d-md-block">
                <div className='caruseltext'>
                 <h5>THE BOOK EDITERS</h5>
                 <h2>The All Time Classics</h2>
                 <h3 className='text-danger'>$19,99&up</h3>
                 <button className='px-3 py-2'>Shop Now</button>
                </div>
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true" />
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true" />
             <span className="visually-hidden">Next</span>
           </button>
         </div>
      </section>
      {/* ///////////////////////////////////////////// */}
      <section className='my-5 bestsellingsection'>
         <div className='d-flex mb-5 justify-content-evenly align-items-center bestselling'>
             <h1>Bestselling Books</h1>
             <div></div>
             <button className='btn px-4 btn-danger rounded-pill'><h6>View List (10 Books)</h6></button>
           </div>
           <div className='row'>
             {Data.product.filter(item=>item.type==="bestselling").map(item=>{
               return(
                  <Card 
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  id={item.id}
                  price={item.price}
                  item={item}
                  key={item.id}
                  />
               )
             })}
           </div>
      </section>
      {/* ///////////////////////////////////////////// */}
      <section className='my-5 dealssection'>
        <div className='mb-5 deals d-flex justify-content-evenly align-items-center'>
              <h1>Deals Of The Week</h1>
              <div></div>
              <button className='btn px-4 btn-danger rounded-pill'><h6>View List (10 Books)</h6></button>
         </div>
         <div className='row mb-5 mx-0'>
           <div className='col-8 col-lg-12 col-xl-8 p-0'>
             <div className='d-flex justify-content-end imgcol'>
               <img  src={dealsimg} />
             </div>
               <div className='dealimgtext'>
                <h5 className='text-white'>NEW YEAR, NEW BOOKS</h5>
                <h1 className='text-white'>The 19 Best New <br /> YA Books of January</h1>
                <p className='text-white'>Without further ado, here are some of the most anticipated YA book <br /> coming out this January.</p>
                <button className='btn px-5 py-3 mt-5 bg-white rounded-pill'>See More</button>
               </div>
           </div>
           <div className='col-4 col-lg-12 col-xl-4 p-0'>
            <div className='dealscards ps-2'>
              {Data.product.slice(0,5).map(item=>{
                return(
                  <DealsCard 
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  price={item.price}
                  key={item.id}
                  item={item}
                  />
                )
              })}
            </div>
           </div>
         </div>
      </section>
      {/* //////////////////////////////////////////// */}
      <section className='ratedsection'>
         <div className='mb-5 rated d-flex justify-content-evenly align-items-center'>
              <h1>Highest RatedBooks</h1>
              <div></div>
              <button className='btn px-4 btn-danger rounded-pill'><h6>View List (10 Books)</h6></button>
         </div>
         <div className='container d-flex'>
          <div className="col firstcard">
            {Data.product.filter(item=>(item.id==0)).map(item=>{
              return(
                <RatedCard 
                  desc={item.desc}
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  price={item.price}
                  key={item.id}
                  item={item}
                />
              )})}
          </div>
          <div className="col secondcard">
          {Data.product.filter(item=>(item.id==1)).map(item=>{
              return(
                <RatedCard 
                  desc={item.desc}
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  price={item.price}
                  key={item.id}
                />
              )})}
          </div>
         </div>
      </section>
      {/* //////////////////////////////////////////// */}
      <Featured />
      {/* ///////////////////////////////////////////// */}
      <section className='peoplesay mb-5'>
        <div className='say'>
        <div id="carouselExampleIndicators" className="carousel mt-5 slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block">
              <div className='d-flex  mx-auto'>
                <p className='text-muted mt-5'>What people saying!</p>
                <div className='bg-danger mt-3 mb-4'></div>
                <h4>Good job. You have share something we cannot buy from outside there. Wish for your bright aand always success with your writing to give value for all.</h4>
                <div className='aboutperson mt-5'>
                  <p>Debanjan Roy / <span className='text-muted'>Los Angeles</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block">
              <div className='d-flex  mx-auto'>
                <p className='text-muted mt-5'>What people saying!</p>
                <div className='bg-danger mt-3 mb-4'></div>
                <h4>Good job. You have share something we cannot buy from outside there. Wish for your bright aand always success with your writing to give value for all.</h4>
                <div className='aboutperson mt-5'>
                  <p>Jane Gray / <span className='text-muted'>California</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block">
              <div className='d-flex  mx-auto'>
                <p className='text-muted mt-5'>What people saying!</p>
                <div className='bg-danger mt-3 mb-4'></div>
                <h4>Good job. You have share something we cannot buy from outside there. Wish for your bright aand always success with your writing to give value for all.</h4>
                <div className='aboutperson mt-5'>
                  <p>Kelli Hansen / <span className='text-muted'>New York</span></p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}
      <section className='popularsection'>
        <div className='mb-5 popular d-flex justify-content-evenly align-items-center'>
              <h1>Popular Books</h1>
              <div></div>
              <button className='btn px-4 btn-danger rounded-pill'><h6>View List (10 Books)</h6></button>
        </div>
        <div className='row mx-0'>
          <div className="col-8 col-lg-12 col-xl-8 px-0">
            <div className="row">
              {Data.product.slice(0,8).map((item)=>{
                return(
                  <Card 
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  price={item.price}
                  key={item.id}
                  />
                )
              })}
            </div>
          </div>
          <div className="col-4 col-xl-4 col-lg-12 px-0">
              <img src={bh03}/>
            <div className='extra ms-5'>
              <h2>Get Extra</h2>
              <h1>Sale -25%</h1>
              <p>ON ORDER OVER $100</p>
              <button className='px-5 py-3'>See More</button>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}
      <section className='genressection'>
        <div className="genres my-5 d-flex justify-content-evenly align-items-center">
          <h1>Genres Book</h1>
          <div></div>
          <button className='btn px-4 btn-danger rounded-pill'><h6>View List (10 Books)</h6></button>
        </div>
        <div className='d-flex justify-content-evenly align-items-center'>
          <div className='bookcategory my-2'>
            <img src={ch01} />
            <h5>Sci-fi</h5>
          </div>
          <div className='bookcategory my-2'>
            <img src={ch03} />
            <h5>Romance</h5>
          </div>
          <div className='bookcategory my-2'>
            <img src={ch02} />
            <h5>Comedy</h5>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}
      <section className='authorsection'>
        <div className="row mt-5">
          <div className="col-4 col-lg-12 col-xl-4">
            <div className='d-flex justify-content-center'>
             <Authors />
            </div>
          </div>
          <div className="col-8 col-lg-12 col-xl-8">
            <div className="container">
              <div className='d-flex justify-content-between my-2'>
                <h2>Keep Reading</h2>
                <button className='btn px-4 btn-danger rounded-pill'><h6>View All</h6></button>
              </div>
              <hr />
              <div className='keepreadingcard'>
                {Data.product.filter(item=>(item.id==0)).map(item=>{
                  return(
                    <RatedCard 
                      desc={item.desc}
                      title={item.title}
                      img={item.img}
                      hoverimg={item.hoverimg}
                      category={item.category}
                      sale={item.sale}
                      price={item.price}
                      key={item.id}
                    />
                  )})}
            </div>
            <div className="row">
              {Data.product.slice(0,6).map((item=>{
                return(
                  <Keepcard 
                  title={item.title}
                      img={item.img}
                      hoverimg={item.hoverimg}
                      category={item.category}
                      key={item.id}
                  />
                )
              }))}
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}
      <section className='numbersection'>
        <div className='container d-flex py-5'>
          <div className='quantitybook mx-3'>
            <div className="row">
              <div className="col-4">
                <div className='bookimg'>
                  <img src={book1} />
                </div>
              </div>
              <div className="col-8">
                <div className='d-flex flex-column ms-2'>
                  <h2 className='ms-2'>94</h2>
                  <p className='text-muted ms-2'>Read Book</p>
                </div></div>
            </div>
          </div>
          <div className='quantityauthor mx3'>
            <div className="row">
              <div className="col-4">
                <div className='bookimg'>
                  <img src={user} />
                </div>
              </div>
              <div className="col-8">
                <div className='d-flex flex-column ms-2'>
                  <h2 className='ms-2'>21</h2>
                  <p className='text-muted ms-2'>Read Authors</p>
                </div></div>
            </div>
          </div>
          <div className='quantityread mx-3'>
            <div className="row">
              <div className="col-4">
                <div className='bookimg'>
                  <img src={book2} />
                </div>
              </div>
              <div className="col-8">
                <div className='d-flex flex-column ms-2'>
                  <h2 className='ms-2'>13</h2>
                  <p className='text-muted ms-2'>Are Read</p>
                </div></div>
            </div>
          </div>
          <div className='quantitypage mx-3'>
            <div className="row">
              <div className="col-4">
                <div className='bookimg'>
                  <img src={book3} />
                </div>
              </div>
              <div className="col-8">
                <div className='d-flex flex-column ms-2'>
                  <h2 className='ms-2'>840/1247</h2>
                  <p className='text-muted ms-2'>Book Pages</p>
                </div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
      item:state.item
  }
}

export default connect(mapStateToProps)(Home)