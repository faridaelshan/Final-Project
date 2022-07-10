import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';


const Basket = () => {
  const{
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem
}=useCart();
if(isEmpty){
  return(
    <>
    <div className='basket'>
      <div className="container d-flex flex-column">
      <button className='btn btn-danger my-2 cartbtn'>VEIW CART</button>
      <button className='btn btn-danger mb-2 checkbtn'>CHECK OUT</button>
      </div>
    </div></>
  )
}
  return (
    <div className='basket'>
      <div className="container d-flex flex-column">
      {items.map((item)=>{
        return(
          <div className="card py-2 ps-1 mt-0" key={item.id}>
            <div className="row g-0">
              <div className="col-md-2">
                  <div className='container'>
                    <img style={{"width":"3rem"}}  src={item.img} />
                  </div>
              </div>
              <div className="col-md-10 ps-1">
                <div className="card-body">
                  <h6 className='card-title'>{item.title}.</h6>
                  <div className='d-flex flex-column mt-2'>
                    <div className='d-flex flex-column align-items-start'>
                      <span className='text-decoration-line-through me-2'>{item.sale}</span>
                      <h5 className='text-danger'>${item.price}</h5>
                    </div>
                    <div className='buttons d-flex'>
                      <button className='btn btn-white text-muted' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                      <button className='btn btn-white'>{item.quantity}</button>
                      <button className='btn btn-white text-muted' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="btn btn-white ms-2 p-0 border-0" onClick={()=>{removeItem(item.id)}}>x</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <hr className='my-0' />
          </div>
      )})}
     
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
  )
}

export default Basket