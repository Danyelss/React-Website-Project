import React from 'react';
import HeaderWCart from "../components/headerWCart";
import ContactForm from "../components/contactForm"

const Contact = (props) => {

    return(
        <body >
            <HeaderWCart>Contact</HeaderWCart>

            <div className="GeneralPageBody">

            <ContactForm></ContactForm>

            </div>
            
        </body>
    )
}

export default Contact;