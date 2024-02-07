import { useNavigate } from 'react-router'
import './App.css'
import {RiSearch2Line} from 'react-icons/ri'
export default function Header(){
    const Categories = ()=>{
        navigate('/categories');
    }
    const navigate=useNavigate();
    return(
        <div>
            <div className='navbar' style={{boxShadow:"1px 1px 1px grey"}}>
      {/* //1 */}
          <div>
            {/* <h1>E-SHOP</h1> */}
              <img src='https://logo.com/image-cdn/images/kts928pd/production/0089b7ae1ed394f041c5f7929e111c11e8eafe4d-424x421.png?w=1080&q=72' alt='Logo' className='logo' />
          </div>
      {/*  //2 */}
          <div className='nav-items'>
              <a href='/' className='active'>Home</a>
              <a href='/contacts'>Contacts</a>
              {/* <a  onClick={()=>Categories()}>Categories  </a> */}
              <a>
              <div class="dropdown">
               Categories
                <div class="dropdown-options">
                    <a href="/fashion">FASHION</a>
                    <a href="/electronics">ELECTRONICS</a>
                    <a href="/sportsiItem">SPORTS ITEMS</a>
                    <a href="/sportsWear">SPORTS WEAR</a>
                    <a href="/kidswear">KIDS</a>
                    {/* <a href="#">Health</a>
                    <a href="#">Sports Essential</a> */}
                    {/* <a href="#">Setting</a>
                    <a href="#">Logout</a> */}
                </div>
                </div>
              </a>
              <a href='/basketproduct'>CART</a>
          </div>
      {/* //3     */}
          <div className='searchbar'>
           <input type='text'
            style={{borderRadius:"10px",border:" rgb(23, 249, 23) ",height:"30px",width:"120px"}} 
           placeholder='Search'
          
           /><RiSearch2Line />
          </div>
    </div>

        </div>
    )
}