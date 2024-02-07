import { useContext } from "react";
import Header from "../../../Header";
import { StoreContext } from "../Fashion/Context/StoreContext";
import BasketProduct from "./BasketProducts";

const Basket = () =>{

    const {products,total}=useContext(StoreContext);
    // console.log(products)

    return(
        <>
        <Header/>
        <div>
            <h5>My Basket</h5>
            <p>total : {total}</p>
            <BasketProduct/>
            {products.map((product,i)=>
            <BasketProduct 
            key={i}
            item={product}
            />
            )}
        </div>

        </>
    )
}
export default Basket;