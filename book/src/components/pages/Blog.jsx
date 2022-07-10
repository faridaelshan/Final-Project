import React from 'react'
import BlogCards from '../blog/BlogCards'









const Blog = () => {
  return (
    <div className='blog px-5'>
      
        <div className="row container m-0 mx-5 px-5">
          <p className='fs-1 '>Lastest Blogs</p>
          <BlogCards />
       </div>
     
      
    </div>
  )
}


export default  Blog