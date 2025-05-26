import './footer.css';
import '../header/header.css';

function Footer(){
  return (
    <div className='footer'>
        <div className="container">
          <div className='footer-box'>
            <div className='footer-navy'>
            <a className='link-navy' target='blank' href="https://telegram.org"><i class="fa-brands fa-telegram" aria-hidden="true"></i></a>
            <a className='link-navy' target='blank' href="https://whatsapp.com"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
              <a className='link-navy' target='blank' href="https://github.com/KateSt421"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
            </div><a className='logo-box' href="#"> 
                      <h1 className='logo-title'>WordWise</h1>
                    </a>
            <div className='footer-box'>
          <h2>Made by KateSt421 ©</h2></div>
          </div>
        </div>
        </div>
  )
}
export default Footer;
