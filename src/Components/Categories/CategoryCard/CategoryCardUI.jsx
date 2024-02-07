import { NavLink, useNavigate } from 'react-router-dom';
import './CategoryCard.css'
import { FaEye } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
 const CategoryCardUI=(props)=>{

  const SingleProduct=() => {
    const {id}= useParams();
    console.log(id);
    return <h1>SinglePage</h1>
  };

  // useEffect(()=>{
  //   SingleProduct();
  // },[]);
  
    return(
        <>
         <div className='card-container'>
         <div className='card'>
           <div className='overflow'>
             <img className='card-img-top' src={props.imgurl}/>
           </div>
           <div className='card-text'>
            <p>{props.id}</p>
            <p>TITLE - <span>{props.title}</span></p>
            <p>PRICE - <span>{props.price}</span></p>
            <span><del>In stock </del>/ Newest Arrival</span>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:'5px'}}>
             <button className='card-Add-btn'>ADD TO CART</button>
             <button className='card-view-btn' onClick={()=>SingleProduct()} ><a href='/singlepageitem/id?'><FaEye /></a></button>
           </div>
           </div>
         </div>
         </div>
       </>
    )
};
export default CategoryCardUI;