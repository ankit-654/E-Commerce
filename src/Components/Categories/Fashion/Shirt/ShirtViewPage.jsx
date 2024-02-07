import { useEffect } from 'react'
import Header from '../../../../Header'
import './ShirtPageView.css'
import AOS from 'aos';
import'aos/dist/aos.css';
export default function ShirtPage(){
    useEffect(()=>{
        AOS.init({
            duration:200,
            // delay:500
        })
    },[])
    return(
        <>
        <Header/>
        {/* CATEGORY HEADER */}
        <div className='category-item-header'>
            <h2>PREMIUM SHIRTS BY E-SHOP </h2>
        </div>
       {/* COTTON SHIRTS */}
       <div className="item-grid-1">
            <div className='item-grid-flex'>
               <div className='item-grid-1-container-1' data-aos="fade-right">
                 <div>
                 <h1 style={{letterSpacing:"3px",opacity:'.9',color:"white"}}>COTTON SHIRTS</h1>
                 </div>
               </div>
            </div>
            <div className='item-grid-flex'>
            <div className='item-grid-1-container-2' data-aos="fade-left">
                 <div>
                 <h4>DISCOVER THE FINEST COLLECTION OF PREMIUM COTTON SHIRTS</h4>
                 <a href='/cottonshirt'><button className='exp-btn'>EXPLORE</button></a>
                 </div>
               </div>
            </div>
        </div>
    {/* Category Header */}
    {/* DENIM */}
        <div className='category-item-header'>
            <h2>PREMIUM SHIRTS BY E-SHOP </h2>
        </div>
        <div className="item-grid-2">
            <div className='item-grid-flex'>
               <div className='item-grid-2-container-1'  data-aos="fade-left">
               <div >
                 <h4>DISCOVER THE FINEST COLLECTION OF PREMIUM DENIM SHIRTS</h4>
                 <button className='exp-btn'>EXPLORE</button>
                 </div>
               </div>
            </div>
            <div className='item-grid-flex'>
            <div className='item-grid-2-container-2'  data-aos="fade-right">
            <div>
                
                 <h1 style={{letterSpacing:"3px",opacity:'.9',color:"white"}}>DENIM SHIRTS</h1>
                 </div>
               </div>
            </div>
        </div>
          {/* CATEGORY HEADER */}
          <div className='category-item-header'>
            <h2>PREMIUM SHIRTS BY E-SHOP </h2>
        </div>
       {/* SILK SHIRTS */}
       <div className="item-grid-1">
            <div className='item-grid-flex'>
               <div className='item-grid-1-container-1' data-aos="fade-left">
                 <div>
                 <h1 style={{letterSpacing:"3px",opacity:'.9',color:"white"}}>SILK SHIRTS</h1>
                 </div>
               </div>
            </div>
            <div className='item-grid-flex'>
            <div className='item-grid-1-container-2' data-aos="fade-right">
                 <div>
                 <h4>DISCOVER THE FINEST COLLECTION OF PREMIUM SILK SHIRTS</h4>
                 <button className='exp-btn'>EXPLORE</button>
                 </div>
               </div>
            </div>
        </div>
    {/* Category Header */}
    {/* LINEN */}
        <div className='category-item-header'>
            <h2>PREMIUM SHIRTS BY E-SHOP </h2>
        </div>
        <div className="item-grid-2">
            <div className='item-grid-flex'>
               <div className='item-grid-2-container-1'  data-aos="fade-left">
               <div >
                 <h4>DISCOVER THE FINEST COLLECTION OF PREMIUM LINEN SHIRTS</h4>
                 <button className='exp-btn'>EXPLORE</button>
                 </div>
               </div>
            </div>
            <div className='item-grid-flex'>
            <div className='item-grid-2-container-2'  data-aos="fade-right">
            <div>
                
                 <h1 style={{letterSpacing:"3px",opacity:'.9',color:"white"}}>LINEN SHIRTS</h1>
                 </div>
               </div>
            </div>
        </div>
         
         
         
        </>
    )
}