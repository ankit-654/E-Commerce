import './App.css'
import Header from './Header'
export default function Layout(){
    return(
        <div>
           {/* // Footer */}
      <div className='footer-container'>
        <div className='footer-flex'>
          <div className='footer-gd'>
            <div>
            <h3>ABOUT THE E-SHOP</h3>
            <h5><a href='#' style={{textDecoration:"none"}}>ELEVATE YOUR STYLE WITH THE BEST COLLECTION FROM E-SHOP</a></h5>
            </div>
          </div>
        </div>
        <div className='footer-flex'>
          <div className='footer-gd'>
            <div>
            <h3>FOOTER MENU</h3>
            <h6><a href='#' style={{textDecoration:"none"}}>PRIVACY POLICY</a></h6>
            <h6><a href='#' style={{textDecoration:"none"}}>REFUND POLICY</a></h6>
            <h6><a href='#' style={{textDecoration:"none"}}>SHIPPING POLICY</a></h6>
            {/* <h6><a href='#' style={{textDecoration:"none"}}>PRIVACY POLICY</a></h6> */}
            </div>
          </div>
        </div>
        <div className='footer-flex'>
          <div className='footer-gd'>
          <div>
          <h3>MAIN MENU</h3>
          <h6><a href='#' style={{textDecoration:"none"}}>HOME</a></h6>
            <h6><a href='#' style={{textDecoration:"none"}}>CONTACTS</a></h6>
            <h6><a href='#' style={{textDecoration:"none"}}>TERMS & CONDITION</a></h6>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}