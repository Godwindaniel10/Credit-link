import React from 'react';
import '../../App.css';

export default function ContactUs() {
  return (
    <>
     <div className="contact-us-container">
       <div className="side1">
         <div className="img"></div>
         <div className="contacts">
         <div className="b1">
         <img src="https://img.icons8.com/ios/50/3ea176/open-sign--v1.png" alt=""/>
           <div className="b1-second">
               <span className="headers">Opening Hours</span><br /><br />
               <p>Mon - Fri. 8am - 5pm</p>
           </div>
         </div>
         <div className="b2">
         <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/3ea176/external-call-medical-kiranshastry-lineal-kiranshastry.png" alt=""/>
         <div className="b2-second">
         
               <span className="headers">Call or WhatsApp</span><br /><br />
               <p>+234 802 342 5988 <br/> +234 803 482 1590</p><br /><br />
               <span className="headers">Free enquiry</span><br /><br />
               <p>enquiry@madasfinance.com</p>
           </div>
         </div>
         <div className="b3">
         <img src="https://img.icons8.com/ios/50/3ea176/worldwide-location.png" alt=""/>
         <div className="b3-second">
               <span className="headers">Corporate Office</span><br /><br />
               <p>Block 14, Suite 6 & 7, Odua Shopping Mall,
Ojota New Garage, Behind Wema Bank Plc</p>
           </div>
         </div>
         </div>
       </div>
       <div className="side2">
        
       </div>
     </div>
    </>
  )
}