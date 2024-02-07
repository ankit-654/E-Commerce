import { logo } from './LogoData'
import './ShowCard.css'
export default function ShowCard(props){
   
    return(
        <div className='logos'>
            <img src={props.imgUrl}/>
        </div>
    )
}