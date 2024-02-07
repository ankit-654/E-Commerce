import { Outlet } from "react-router";
import CategoryCardUI from "../../CategoryCard/CategoryCardUI";
import ShirtAPIData from "./ShirtAPI";
import { responsive } from "./ShirtData";

export default function CottonShirt(){
    return(
        <>
        {/* <p>Cotton Shirt Data View</p> */}
        <ShirtAPIData/>
        
        </>
    )
}