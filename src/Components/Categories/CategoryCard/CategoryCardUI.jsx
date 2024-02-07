import {  useNavigate } from 'react-router-dom';
import './CategoryCard.css'
import { FaEye } from "react-icons/fa";
import { useContext, useEffect } from 'react';
import { StoreContext } from '../Fashion/Context/StoreContext';
 const CategoryCardUI=({item})=>{
  const navigate=useNavigate();
  const {addToBasket} =useContext(StoreContext);

   const handleAdd=()=>{
    addToBasket(item);
    alert("Hey");
    console.log(item);
    
   }
 
    return(
        <>
         <div className='card-container'>
         <div className='card'>
           <div className='overflow'>
             <img className='card-img-top' src={item.imgurl}/>
           </div>
           <div className='card-text'>
            <p>{item.id}</p>
            <p>TITLE - <span>{item.title}</span></p>
            <p>PRICE - <span>{item.price}</span></p>
            <span><del>In stock </del>/ Newest Arrival</span>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:'5px'}}>
             <button onClick={handleAdd}  className='card-Add-btn'>ADD TO BASKET</button>
             <button className='card-view-btn'><FaEye /></button>
           </div>
           </div>
         </div>
         </div>
       </>
    )
};
export default CategoryCardUI;