import './App.css';

import Slider from './Slider.js';
import Layout from './Layout.jsx';
import Header from './Header.jsx';
import LogoSlide from './Components/Shoe/LogoSlide.jsx';
function App() {

  return(
   <>
   <div>
    <Header/>
    <Slider/>
    {/* /// Show head */}
      <div className='show-Head'> 
        <p style={{borderRadius:"0px 0px 50px 0px",borderBottom:".7px solid rgb(193, 192, 192)",margin:"10px",paddingTop:"60px"}}>T
        <span>ry,shoes from your favorite brands...</span></p>
          
        <div className='shoe-grid'>
          <div className='sh-grid-1'>
            <LogoSlide/>
          </div>
          <div className='sh-grid-2'>
              <h5>Reach out to our newly Launched Shoes...</h5>
              <button>EXPLORE </button>
          </div>
        </div>
        <div>
          <h4></h4>
        </div>
      </div>
      {/* // Banner 1 */}
      {/* <div className='Ad-banner-1'>
          <div className='Ad-banner-1-flex'>
            <div className='Ad-banner-1-gd-1'>
                <h2>GRAB THE BEST DEAL</h2>
                <button  className='exp-btn'>EXPLORE</button>
            </div>
            </div>
            <div className='Ad-banner-1-gd-2'>
               <div className='ad-banner-1-gd-div'>
               </div>
            </div>
      </div> */}
      {/* // Banner 2 */}
      <div className='Ad-banner-2'>
        <div className='Ad-banner-2-flex'>
          <div className='Ad-banner-2-gd-1'>

          </div>
        </div>
        <div className='Ad-banner-2-flex'>
           <div className='Ad-banner-2-gd-3'>
           <div style={{textAlign:"center"}}>
           <h2 style={{letterSpacing:"2px",wordSpacing:"5px"}}>ELEVATE YOUR STYLE WITH OUR BEST PRODUCTS</h2>
            <h4 style={{letterSpacing:"2px",wordSpacing:"3px"}}>OUR BEST PRODUCTS</h4>
                <button className='exp-btn'>EXPLORE</button>
           </div>
           </div>
        </div>
      </div>
     
      <Layout/>
   </div>
   </>
  );
}

export default App;
