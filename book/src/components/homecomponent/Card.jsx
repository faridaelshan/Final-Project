import React from 'react'
import {BsBasket2} from 'react-icons/bs'
import {MdContentCopy} from 'react-icons/md'
import {AiOutlineStar, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const Card = ({img,hoverimg,id,category,title,sale,price,item}) => {
  const {addItem} = useCart();
  return (
    <div className='px-2 pt-2 m-2 card col-2 align-items-center' style={{"width": "12rem"}}>
          <div className=' beforehover'>
            <img style={{"width":"10rem"}}  src={img} />
          </div>
          <div className=' afterhover'>
            
             <img style={{"width":"10rem"}}  src={hoverimg} />
           
           
          <div className='cardbutton'>
             <Link to={`/product/${id}`}><button><AiOutlineEye /></button></Link> 
              <button><AiOutlineHeart /></button>
              <button  onClick={()=>addItem(item)}><BsBasket2 /></button>
              <button><MdContentCopy /></button>
          </div>
          </div>
        <div className='card-body container' style={{"width":"11rem"}}>
          <h6 className='text-muted'>{category}</h6>
          <h6 className='card-title'>{title}.</h6>
          <div className='d-flex text-muted mt-2'>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className='d-flex mt-2'>
            <span className='text-decoration-line-through me-2'>{sale}</span>
            <h5 className='text-danger'>${price}</h5>
          </div>
        </div>
      </div>
  )
}

export default Card