import React,{ useState } from 'react'
import Data from '../../Data/Data'
import Card from '../homecomponent/Card'

const Featured = () => {
    const [items, setitems] = useState(Data.product.filter(group=>{return(  group.group==="veiwed") }));
    const groupfilter =(a)=>{
  
      const b = Data.product.filter((group)=>{
  
        return group.group === a
  
      })
  
      setitems(b)
  
    }
  return (
    <section className='featuredsection'>
        <div className='featured d-flex flex-column align-items-center my-5'>
          <h1 className='text-center'>Featured Books</h1>
          <div className='d-flex justify-content-center groupbutton'>
            <button className='active mx-2' onClick={()=>groupfilter("veiwed")}>Most Viewed</button>
            <button className='mx-2' onClick={()=>groupfilter("sale")}>On Sale</button>
            <button className='mx-2' onClick={()=>groupfilter("featured")}>Featured</button>
          </div>
          <div className='row'>
            {items.map((item)=>{
              return(
                <Card 
                  title={item.title}
                  img={item.img}
                  hoverimg={item.hoverimg}
                  category={item.category}
                  sale={item.sale}
                  price={item.price}
                  key={item.id}
                  item={item}
                  />
              )
            })}
          </div>
          <button className='btn-danger more py-2 px-5 mt-4'>Show More</button>
        </div>
      </section>
  )
}

export default Featured