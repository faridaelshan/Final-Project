import React,{useState} from 'react'
import {BsArrowRight , BsArrowLeft} from 'react-icons/bs'
import Author from './Author'
import ReactPaginate from 'react-paginate'
import Data from '../../Data/Data'


const Authors = () => {
    const [items,setItems]=useState(Data.author);
    const[pageNumber,setPageNumber]=useState(0);
    const itemPerPage=7;
    const pageVisited=pageNumber*itemPerPage;
    const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item)=>{
      return(
        <Author 
        name={item.name}
        img={item.img}
        key={item.id}
        item={item}
        />
      )
    });
    const pageCount =Number(items.lenght/itemPerPage);
    const changepage = ({selected})=>{
      setPageNumber(selected)
    }
  return (
    <div className='aboutauthor'>
    <div className='d-flex popular justify-content-between'>
      <h2>Popular Author</h2>
       <ReactPaginate 
      previousLabel={<BsArrowLeft />}
      nextLabel={<BsArrowRight />}
      pageCount={2}
      onPageChange={changepage}
      containerClassName={'paginate'}
      pageClassName={'pages'}
      previousClassName={'prepage'}
      nextClassName={'nextpage'}
      pageLinkClassName={'pagelink'}
      previousLinkClassName={'prepagelink'}
      nextLinkClassName={'nextpagelink'}
      activeClassName={'activepage'}
      activeLinkClassName={'activepagelink'}
      />
    </div>
    <hr />
    <div className="authors d-flex flex-column">
       
    {displayItems}
    
    </div>
  </div>
  )
}

export default Authors