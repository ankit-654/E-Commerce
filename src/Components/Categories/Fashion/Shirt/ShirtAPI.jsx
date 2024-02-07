import CategoryCardUI from "../../CategoryCard/CategoryCardUI"
import { responsive, shirtData } from "./ShirtData"
import Header from '../../../../Header'
import "react-multi-carousel/lib/styles.css";
import './ShirtPageView.css'
import { useEffect, useState } from "react";
import axios from "axios";
export default function ShirtAPIData(){
    // const [data,setData]=useState([]);
    // console.log(shirtData);
    //  const displayData = ()=>{
    //   axios.get("#url").then(e=>{
    //    setData(e.data);
    //   })
    //  };

    //  useEffect(()=>{
    //     displayData();
    //  },[])

    const product=shirtData.map((item)=>(
        
        <CategoryCardUI
        id={item.id}
        imgurl={item.imgurl}
         title={item.title}
         price={item.price}
        />
      
    ))
    
    return(
        <>
        <Header/>
            <div className="grid" responsive={responsive}>
             {product}
            </div>
        </>
    )
}