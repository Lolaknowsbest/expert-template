import React from "react";
import ReactDOM from "react-dom";
import ContactStyle from './contact.module.scss';

function Contact() {
    return (
        <div className={ContactStyle.contactContainer} id="contactHash">
            <div>
                <h1>CONTACT US</h1>
            </div>
            <div className={ContactStyle.contactInfo}>
                <p><strong>Location: </strong>123 ABC Street</p>
                <p><strong>Phone Number: </strong>123-456-7890</p>
                <p><strong>Fax Number: </strong>098-765-4321</p>
            </div>
        </div>
    )
}

export default Contact;