import './header.css';
import logo from './logoW.jpg';

function Header(){
  return ( 
  <div className='header'>
    <div className="container">
      <div className='header-box'>
        <a className='logo-box' href="#"> 
            <img className="logo"src={logo} alt="WordWise" /><h1 className='logo-title'>WordWise</h1>
        </a>
      <div/> 
        <div className='header-navy'>
          <a className='link-navy' href="#">Home</a>
          <a className='link-navy' href="#">Cards</a>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Header;