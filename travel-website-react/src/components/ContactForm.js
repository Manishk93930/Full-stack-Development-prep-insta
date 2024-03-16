import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
     <div className='con-con'><p>We'd love to hear from you! Whether you have questions about our destinations, want to inquire about custom travel packages, or simply want to say hello, feel free to reach out to us using the contact form below.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className='submit'>Submit</button>
      </form></div>
    </section>
  );
}

export default ContactForm;
