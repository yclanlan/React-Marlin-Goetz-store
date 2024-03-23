import React from 'react'
import './Footer.css'

function Footer() {

  return (
  
    <div className='footer__container'>

      <div className='footer__column1'>
      <img src="https://www.malinandgoetz.com/media/wysiwyg/M_G_Logo_NY_White_2023_1.png"></img>

      </div>

      <div className='footer__column2'>

        <div className='footer__column2__content'>
        <h3>about.</h3>
        about us<br/>
        blog<br/>
        employment<br/>
        </div>


        
        <div className='footer__column2__content'>
        <h3>shop.</h3>
        best-sellers<br/>
        (+)points<br/>
        special offers<br/>
        refer a friend<br/>
        </div>

        
     
        <div className='footer__column2__content'>
        <h3>find us.</h3>
        apothecary locator<br/>
        </div>

      </div>

      <div className='footer__column3'>

      <h3>sign up to hear about new products and skincare tips.
enter your email</h3>
      <div className='footer__column3__content'>
      <input className="footer__mailInput" type="text" />
      <button className="">submit</button>
      </div>

      <p>MALIN+GOETZ would like to keep you updated by email about our latest products and offers (including new arrivals, exclusive previews, special offers and promotions). if you are happy for us to do this, please tick the box above to agree to our privacy policy and terms of use. you can change your mind at any time and unsubscribe by clicking this link.</p>

      </div>
    
    </div>
    
   );
  }


  export default Footer;