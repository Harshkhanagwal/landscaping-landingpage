import './Contact.css'

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <h2>Let&apos;s Build Your Dream Landscape</h2>
          <p>
            Share your requirement and our team at Landscaping will get in touch with a practical plan and
            quick estimate.
          </p>
          <div className="contact-cta">
            <a className="btn btn-primary" href="tel:+1234567890">Call Now</a>
            <a className="btn contact-whatsapp" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
              WhatsApp Chat
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="Your phone number" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Tell us about your project" />

          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
