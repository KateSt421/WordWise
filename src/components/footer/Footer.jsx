import './footer.css';
import telegram from './telegram.avif'

function Footer(){
  return (
    <div className='footer'>
        <div className="container">
          <div className='footer-box'>
            <a className='telegram-box' href="#"> 
                <img className="telegram"src={telegram} alt="https://t.me/Ekaterina421" />
                <h1 className='telegram-title'>Contact me</h1>
            </a>
          <div/> <div className='footer-box'>
          <h2>All rights reserved ©</h2></div>
            <div className='footer-navy'><h1 className='logo-title'>Made by KateSt421</h1>
              <a className='link-navy' target='blank' href="https://github.com/KateSt421">Git hub</a>
            </div>
          </div>
        </div>
        </div>
  )
}
export default Footer;
