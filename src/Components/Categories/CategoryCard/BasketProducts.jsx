const BasketProduct = ({item})=>{
    console.log(item);
    return(
        <>
        <h2>HeyCart</h2>
        <img src={item.imgurl} />
        <p>{item.price}</p>
        <p>{item.title}</p>
        </>
    )
}
export default BasketProduct;