import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetails = (props) => {
  return (
    <div className='py-5 px-5 blogdetails'><BlogDetailsItem {...props.blog}/></div>
  )
}

const mapStateToProps=(state,props)=>{
    return{
        blog:state.item.find((blog)=>{
         return blog.id===props.match.params.id
       })
    }
}

export default connect(mapStateToProps)(BlogDetails)