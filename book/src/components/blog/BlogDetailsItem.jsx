import React from 'react'
import {BsFillShareFill,BsTwitter} from 'react-icons/bs'
import {CgFacebook} from 'react-icons/cg'

const BlogDetailsItem = ({title,text,time,by,img}) => {
  return (
    <div className='blogdetailsitem px-5'>
        <h3>{title}</h3>
        <div className='my-2'>
            <span><BsFillShareFill />Share</span>
            <span className='ms-2'><CgFacebook />Facebook</span>
            <span className='ms-2'><BsTwitter />Twitter</span>
        </div>
        <p>
            <span>Posted By :<span className="by">{by}</span></span>
            <span>/IN: <span className='category'>SUB CATEGORY 1</span></span>
            <span>On: {time} /Comment: 0 Hit: 820</span>
        </p>
            <img src={img} />
            <p className='my-3 text'>{text}</p>
    </div>
  )
}

export default BlogDetailsItem