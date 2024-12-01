import "./Contact.css"; // Import the Contact component's CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      
      <p className="contact-text">
        If you have any questions, comments, or suggestions, feel free to reach out to us using the form below or by contacting us through the details provided.
      </p>

      <h2 className="contact-header">Get In Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <h2 className="contact-header">Other Ways to Reach Us</h2>
      <ul className="contact-info">
        <li>Email: support@bookmanagement.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 456 Bookworm Lane, Book City, BK 78901</li>
      </ul>
    </div>
  );
}

export default Contact;
