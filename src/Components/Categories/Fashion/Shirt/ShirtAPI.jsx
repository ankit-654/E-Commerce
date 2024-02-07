import CategoryCardUI from "../../CategoryCard/CategoryCardUI"
import { responsive, shirtData } from "./ShirtData"
import Header from '../../../../Header'
import "react-multi-carousel/lib/styles.css";
import './ShirtPageView.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../../Layout";
export default function ShirtAPIData(){
        console.log(shirtData);
       
    
    return(
        <>
        <Header/>
            <div className="grid" responsive={responsive}>
                {shirtData.map((item,i)=>
                <CategoryCardUI
                   key={i}
                   item={item}
                />
                )}
            </div>
            <Layout/>
        </>
    );
};