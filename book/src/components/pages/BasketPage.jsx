import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import {MdKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdDelete} from 'react-icons/md'

const BasketPage = () => {
  const{
    isEmpty,
    items,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem
}=useCart();
if(isEmpty){
  return(
    <div className='basketpage py-5'>
      <div className="row">
        <div className="col-8 d-flex flex-column align-items-end">
          <div className='cart'>
          <h3 className='mx-4 my-2'>SHOPPING CART</h3>
          <hr />
          <p className='text-muted mx-4'>There are no more items in your cart</p>
          </div>
          <div className='continue my-4'>
            <Link to="/"><button>&#10092; Continue shopping</button></Link> 
          </div>
        </div>
        <div className="col-4 text-muted">
          <div className='totalcart'>
            <div className='d-flex justify-content-between mx-4'>
              <span>0 items</span>
              <span>$0.00</span>
            </div>
            <div className='d-flex justify-content-between mx-4 mt-5'>
              <span>Total(tax excl.)</span>
              <span>$0.00</span>
            </div>
            <div className='d-flex justify-content-between mx-4'>
              <span>Total(tax incl.)</span>
              <span>$0.00</span>
            </div>
            <div className='d-flex justify-content-between mx-4'>
              <span>Taxes:</span>
              <span>$0.00</span>
            </div>
            <div className='d-flex justify-content-center mt-5 proceed'>
              <button className='py-1 px-3'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  return (
    <div className='basketpage py-5'>
      <div className="row">
        <div className="col-8 d-flex flex-column align-items-end">
          <div className='cart'>
          <h3 className='mx-4 my-2'>SHOPPING CART</h3>
          <hr />
          {items.map(item=>{
            return(
              <div className="row my-4">
                <div className="col-2 ms-4">
                  <img src={item.img} style={{"width":"6rem"}} />
                </div>
                <div className="col-4 d-flex flex-column">
                  <div className='carttitle rounded-pill'>
                    <h6 className='mx-2'>{item.title}</h6>
                  </div>
                  <p>
                   <span className='text-decoration-line-through text-muted'>{item.sale}</span> 
                  <br />
                  <span className='text-danger'>${item.price}</span>
                  </p>
                  <p className='category'><b>Category:</b>{item.category}</p>
                </div>
                <div className="col-4">
                  <div className="d-flex buttons">
                    <button className=''>{item.quantity}</button>
                    <div className="d-flex flex-column">
                      <span className='py-1' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}><MdKeyboardArrowUp /></span>
                      <span className='py-1'  onClick={()=>updateItemQuantity(item.id, item.quantity -1)}><MdOutlineKeyboardArrowDown /></span>
                    </div>
                    <div className='mx-5'>
                      <h6>${item.quantity*item.price}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <button onClick={()=>{removeItem(item.id)}} className='text-muted'><MdDelete /></button>
                </div>
              </div>
            )
          })}
          </div>
          <div className='continue my-4'>
            <Link to="/"><button>&#10092; Continue shopping</button></Link> 
          </div>
        </div>
        <div className="col-4 text-muted">
          <div className='totalcart'>
            <div className='d-flex justify-content-between mx-4'>
              <span>{totalItems} items</span>
              <span>${cartTotal +7.00}</span>
            </div>
            <div className='d-flex justify-content-between mx-4'>
              <span>Shipping</span>
              <span>$7.00</span>
            </div>
            <div className='d-flex justify-content-between mx-4 mt-5'>
              <span>Total(tax excl.)</span>
              <span>${cartTotal}</span>
            </div>
            <div className='d-flex justify-content-between mx-4'>
              <span>Total(tax incl.)</span>
              <span>${cartTotal}</span>
            </div>
            <div className='d-flex justify-content-between mx-4'>
              <span>Taxes:</span>
              <span>$0.00</span>
            </div>
            <div className='d-flex justify-content-center mt-5 proceed'>
              <button className='py-1 px-3 text-muted'>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
)}

export default BasketPage

{/* <div className="row me-4">
        <div className="col-8 d-flex flex-column align-items-end">
          <div style={{"width":"80%"}}>
            <h3>SHOPPING CART</h3>
          <hr />
          {items.map((item)=>{
        return(
          <div className="card py-2 ps-1 mt-0" key={item.id}>
            <div className="row g-0">
              <div className="col-md-4">
                  <div className='container p-3'>
                    <img style={{"width":"6rem"}}  src={item.img} />
                  </div>
              </div>
              <div className="col-md-6 ps-1">
                <div className="card-body">
                  <h6 className='card-title d-flex'>{item.title}.</h6>
                  <div className='d-flex flex-column mt-2'>
                    <div className='d-flex flex-column'>
                      <span className='text-decoration-line-through me-2'>{item.sale}</span>
                      <h5 className='text-danger'>${item.price}</h5>
                    </div>
                    <div className='buttons d-flex'>
                      <button className='btn btn-white text-muted' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                      <button className='btn btn-white'>{item.quantity}</button>
                      <button className='btn btn-white text-muted' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2'>
              <div className='d-flex justify-content-end'>
                      <button className="btn btn-white ms-2 p-0 border-0" onClick={()=>{removeItem(item.id)}}>x</button>
                    </div>
                    
              </div>
            </div>
          </div>
      )})}
          </div>
          <div className='d-flex justify-content-start my-3'  style={{"width":"80%"}}>
            <button>&#10092; Continue shopping</button>
          </div>
        </div>
        <div className='col-4'>
        <div className='d-flex justify-content-between'>
        <p>SUBTOTAL</p>
        <span>${cartTotal}</span>
      </div>
      <div className='d-flex justify-content-between'>
        <p>SHIPPING</p>
        <span>$7.00</span>
      </div>
      <div className='d-flex justify-content-between'>
        <p>TAXES</p>
        <span>$0</span>
      </div>
      <hr  className='my-1'/>
      <div className='d-flex justify-content-between'>
        <p>TOTAL</p>
        <span>${cartTotal +7}</span>
      </div>
      <hr className='my-1' />
      <Link to="/basket"><button className='btn btn-danger my-2 cartbtn'>VEIW CART</button></Link>
      <button className='btn btn-danger mb-2 checkbtn'>CHECK OUT</button>
        </div>
      </div>
    <div className="container d-flex flex-column">
      <button className='btn btn-danger my-2 cartbtn'>VEIW CART</button>
      <button className='btn btn-danger mb-2 checkbtn'>CHECK OUT</button>
      </div> */}