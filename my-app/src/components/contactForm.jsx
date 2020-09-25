import React from 'react';

const ContactForm = () => {

    const alertDone = () => {
        alert("Thank you!");
      }

      //send to email adress
      // in cazul in care e gresit, continua cu mesajul de confirmare

    return(
        <div className="ContactContainer">
        <div>
        <form> 
    
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
    
    
        <label>Message</label>
        <textarea id="subject" className="MessageBox" name="subject" placeholder="Wrie your message.." maxlength="160"></textarea>
        <input type="submit" value="Submit" onClick={alertDone}></input>
        </form>
        </div>
        </div>
        )
}

export default ContactForm;

