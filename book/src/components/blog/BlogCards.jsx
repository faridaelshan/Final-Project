import React from 'react'
import { connect } from 'react-redux'
import BlogCard from './BlogCard'

const BlogCards = (props) => {
  return (
    <div className='blogcards'>
        {props.blog.map(blog=>{
            return<BlogCard key={blog.id} {...blog}/>
        })}
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        blog:state.item
    }
}

export default connect(mapStateToProps)(BlogCards)