import React,{useState} from 'react'
import Data from '../../Data/Data'
import CategoryCard from '../category/CategoryCard'
import ReactPaginate from 'react-paginate'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {FaListUl} from 'react-icons/fa'

const Categories = () => {
  const [items,setItems]=useState(Data.product);
  const janrfilter =(a)=>{
  
    const b = Data.product.filter((janr)=>{

      return janr.janr === a

    })

    setItems(b)

  }
  const[pageNumber,setPageNumber]=useState(0);
  const itemPerPage=12;
  const pageVisited=pageNumber*itemPerPage;
  const displayItems=items.slice(pageVisited,pageVisited+itemPerPage).map((item)=>{
    return(
      <CategoryCard 
              title={item.title}
              img={item.img}
              hoverimg={item.hoverimg}
              category={item.category}
              sale={item.sale}
              price={item.price}
              item={item}
              key={item.id}
               />
    )
  });
  const pageCount = Number(items.lenght/itemPerPage);
  const changepage = ({selected})=>{
    setPageNumber(selected)
  }
  return (
    <div className="categories">
      <div className="row m-0 p-0">
        <div className="col-3 d-flex justify-content-end">
          <div className='filterelements'>
            <h3 className='my-2'>Filter</h3> 
            <hr />
            <h5 className='my-2'>Janr</h5>
            <p className='ms-2' onClick={()=>janrfilter("Fərdi inkişaf - Motivasiya")}>Fərdi inkişaf - Motivasiya</p>
            <p className='ms-2' onClick={()=>janrfilter("Ailə - Uşaq tərbiyyəsi")}>Ailə - Uşaq tərbiyyəsi</p>
            <p className='ms-2' onClick={()=>janrfilter("Din və mədəniyyət")}>Din və mədəniyyət</p>
            <p className='ms-2'  onClick={()=>janrfilter("Uşaq ədəbiyyatı")}>Uşaq ədəbiyyatı</p>
            <p className='ms-2' onClick={()=>janrfilter("Bədii ədəbiyyat")}>Bədii ədəbiyyat</p>
            <p className='ms-2'  onClick={()=>janrfilter("Elmi-fantastika")}>Elmi-fantastika</p>
            <p className='ms-2' onClick={()=>janrfilter("Bioqrafiya")}>Bioqrafiya</p>
            <p className='ms-2' onClick={()=>janrfilter("Dedektiv")}>Dedektiv</p>
            <p className='ms-2'  onClick={()=>janrfilter("Klassik")}>Klassik</p>
            <p className='ms-2'  onClick={()=>janrfilter("Roman")}>Roman</p>
            <p className='ms-2' onClick={()=>janrfilter("Jurnal")}>Jurnal</p>
            <p className='ms-2'  onClick={()=>janrfilter("Təhsil")}>Təhsil</p>
            <p className='ms-2' onClick={()=>janrfilter("Elmi")}>Elmi</p>
            <p className='ms-2' onClick={()=>janrfilter("Digər")}>Digər</p>
            <br />
            {/* <hr />
            <h5 className='my-2'>Qiymət</h5>
           <span>$5.00 - $40.00</span>
           <br />
           <input className='mt-2' type="range" min="5" max="40"/>  */}
          </div>
        </div>
        <div className="col-9">
          <div className="row pt-3">
           {displayItems}
          </div>
            <ReactPaginate 
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={3}
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
      </div>
    </div>
  )
}

export default Categories