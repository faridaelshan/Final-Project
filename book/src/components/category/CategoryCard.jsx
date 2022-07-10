import React from 'react'
import {BsBasket2} from 'react-icons/bs'
import {MdContentCopy} from 'react-icons/md'
import {AiOutlineStar, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import { useCart } from 'react-use-cart';

const CategoryCard = (props) => {
    const {addItem} = useCart();
    return (
      <div className='px-2 pt-2 m-2 card col-3 align-items-center'>
            <div className=' beforehover'>
              <img style={{"width":"14rem"}}  src={props.img} />
            </div>
            <div className=' afterhover'>
              <img style={{"width":"14rem"}}  src={props.hoverimg} />
            <div className='cardbutton'>
                <button><AiOutlineEye /></button>
                <button><AiOutlineHeart /></button>
                <button  onClick={()=>addItem(props.item)}><BsBasket2 /></button>
                <button><MdContentCopy /></button>
            </div>
            </div>
          <div className='card-body container' style={{"width":"14rem"}}>
            <h6 className='text-muted'>{props.category}</h6>
            <h6 className='card-title'>{props.title}.</h6>
            <div className='d-flex text-muted mt-2'>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className='d-flex mt-2'>
              <span className='text-decoration-line-through me-2'>{props.sale}</span>
              <h5 className='text-danger'>${props.price}</h5>
            </div>
          </div>
        </div>
    )
}

export default CategoryCard