import React, { useRef } from "react";
import "../style/contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const form =useRef()
  const calling =(e)=>{
    e.preventDefault();
   
    emailjs.sendForm('service_nlcsa2s', 'template_0s90k5w', form.current, 'Xrm1ORmUAXnT4AqKS')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

}
  return <div className="formcantinor">
    <form className="form" ref={form} onSubmit={calling}>
      <label>Name</label>
      <input type="text" placeholder="Enter your name"  name="to_name"/>
      <label>E-mail </label>
      <input type="e-mail" placeholder="Enter e-mail"  name="from_name"/>
      <label> contact Number </label>
      <input type="number" placeholder="Enter subject" name="to-contact" />
      <label>Massage </label>
      <input className="massage" type="text" placeholder="text here!" name="message" />
   <button className="sumbitbtn" type="sumbit">Send</button>

    </form>
  </div>;
}

export default Contact;
