import React from 'react'

const Product = ({img,title,price,id}) => {
  return (
    <div>
        <div className="container" >
            <div className="row">
                {id}
               <img src={img} alt="" />
        <p>{title}</p>
        <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product