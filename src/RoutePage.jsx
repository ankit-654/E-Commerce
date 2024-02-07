import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import App from "./App";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from './Components/Contact/Contact.jsx'
import FashionAPI from "./Components/Categories/Fashion/Fashionpage.jsx";
import ElectronicPage from "./Components/Categories/Electronics/Electronicspage.jsx";
import SportsItem from "./Components/Categories/Sports/SportsItem.jsx";
import Sportswear from "./Components/Categories/SportWear/Sportspage.jsx";
import KidsWear from "./Components/Categories/Kids/Kidspage.jsx";
import ShirtPage from "./Components/Categories/Fashion/Shirt/ShirtViewPage.jsx";
import CottonShirt from "./Components/Categories/Fashion/Shirt/CottonShirt.jsx";
import SingleContentPage from "./Components/Categories/CategoryCard/SingleContentPage.jsx";
export default function RoutePage (){
return(
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/contacts" element={<Contact/>} />
                <Route path="/fashion" element={<FashionAPI/>}/>
                    <Route path="/shirtpage" element={<ShirtPage/>}/>
                       <Route path="/cottonshirt" element={<CottonShirt/>} />
                         <Route path="/singleviewitem/:id"  element={<SingleContentPage/>}/>
                <Route path="/electronics" element={<ElectronicPage/>}/>
                <Route path="/sportsiItem" element={<SportsItem/>}/>
                <Route path="/sportsWear" element={<Sportswear/>}/>
                <Route path="/kidswear" element={<KidsWear/>}/>
            </Routes>
        </Router>
    </div>
)
}