import React from "react";
import ContactStyle from './contact.module.scss';

function Contact() {
    return (
        <div className={ContactStyle.contactContainer} id="contactHash">
            
                
            
            <section className={ContactStyle.contactInfo}>
            <h1>CONTACT US</h1>
                <p><strong>Location: </strong>321 Best Street</p>
                <p><strong>Phone Number: </strong>123-456-7890</p>
                <p><strong>Fax Number: </strong>098-765-4321</p>
                <p><strong>Email: </strong>tribecaeyecare@gmail.com</p>
            </section>
            <section>
           <h1>HOURS</h1> 
      <p>Monday: 8:30am - 5:00pm</p>  

      <p>Tuesday: 8:30am - 5:00pm</p>  

        <p>Wednesday & Thursday: 8:30am - 7:00pm</p>

       <p>Friday: 8:30am - 5:00pm</p> 

       <p>Saturday: 9:00am - 3:00pm</p> 

      <p> Sunday: CLOSED</p> 
            </section>
        
        </div>
    )
}

export default Contact;