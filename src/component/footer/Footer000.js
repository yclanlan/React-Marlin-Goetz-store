import React from 'react'
import './Footer.css'

function Footer() {

  return (
  
    <div className='footer__container'>

      <div className='footer__column1'>
      <div className='footer__column1_top'>
      <img src="https://www.malinandgoetz.com/media/wysiwyg/M_G_Logo_NY_White_2023_1.png"></img>
      </div>
      <div className='footer__column1_bottom'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>

      </div>

  
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