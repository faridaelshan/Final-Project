import React from 'react'
import { connect } from 'react-redux'
import Product from './ShowProduct'

const ProductAbout = (props) => {
  return (
    <div><Product {...props.item}/></div>
  )
}
const mapStateToProps=(state,props)=>{
  return{
      item:state.item.find((item)=>{
       return item.id===props.match.params.id
     })
  }
}

export default connect(mapStateToProps)(ProductAbout)