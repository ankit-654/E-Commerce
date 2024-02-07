// import { HomeCardData,responsive } from "./HomeCarouselData";
// import Card from "./HomeCard";
// import Carousel from "react-multi-carousel";
// import 'react-multi-carousel/lib/styles.css'
// export  default function Slider(){
//     const  product =HomeCardData.map((item)=>(
//                 <Card
//                 url={item.imgurl}
//                 />
//             ));
   
//     return(
//         <div>
//            <Carousel 
//           showDots={true} 
//           autoPlay={true} 
//           autoPlaySpeed={1000} 
//           infinite={true} 
//           responsive={responsive}
//           slidesToSlide={1}
//           >
//             {product}
//           </Carousel>
//         </div>
//     )
// }


import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./HomeCard";
import './App.css';

import { productData, responsive } from "./HomeCarouselData";
export default function Slider(){
    const product = productData.map((item) => (
        <Card
          url={item.imageurl}
       
        />    
      ));
      return (
        <div className="app">
          <Carousel 
          arrows={false}
          customRightArrow={true}
          showDots={true} 
          autoPlay={true} 
          autoPlaySpeed={1500} 
          infinite={true} 
          slidesToSlide={1}
          responsive={responsive}
          >
            {product}
          </Carousel>
        </div>
      );
}