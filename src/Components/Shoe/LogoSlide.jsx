import Carousel  from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { logo,responsive } from "./LogoData";
import ShowCard from "./ShowCard";

export default function LogoSlide(){
    const data=logo.map((item)=>(
        <ShowCard
        imgUrl={item.logoUrl}
        />
    ))
return(
    <div>
        <Carousel 
        // showDots={true} 
        arrows={false}
        autoPlay={true} swipeable={true}
        autoPlaySpeed={2500} 
        infinite={true} 
        slidesToSlide={1}
        responsive={responsive}
        >
          {data}
        </Carousel>
    </div>
)
}