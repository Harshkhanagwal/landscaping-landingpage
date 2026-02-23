import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Landscaping</h3>
          <p>Professional landscaping dealer and service provider for modern outdoor living spaces.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+91 99991 33305</p>
          <p>hello@landscaping.com</p>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="LinkedIn">In</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Landscaping. All rights reserved.</div>
    </footer>
  )
}

export default Footer
