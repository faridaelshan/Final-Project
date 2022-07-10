import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillShareFill,BsTwitter} from 'react-icons/bs'
import {CgFacebook} from 'react-icons/cg'
import {RiShareBoxFill} from 'react-icons/ri'

const BlogCard = ({id,title,description,date,by,img}) => {
  return (
    <div className='blogcard'>
        <img src={img}  />
        <div>
            <span>{date}</span>/BY: <span>{by}</span>
        </div>
        <h1>{title}</h1>
        <p>
            <span><BsFillShareFill />Share</span>
            <span className='ms-2'><CgFacebook />Facebook</span>
            <span className='ms-2'><BsTwitter />Twitter</span>
        </p>
        <p>
            <span>COMMENT: 0</span>
            <span className='ms-2'>HIT: 816</span>
        </p>
        <p>{description}</p>
        <div className="open">
            <p>IN: SUB CATEGORY 1</p>
            <Link to={`/blog/${id}`}><RiShareBoxFill /></Link>
        </div>
        <hr />
    </div>
  )
}

export default BlogCard