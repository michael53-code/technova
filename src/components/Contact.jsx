import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('Thank you! Your message has been received.');
  }

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Email: info@technova.com</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;