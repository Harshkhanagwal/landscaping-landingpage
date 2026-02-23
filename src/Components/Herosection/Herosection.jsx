import './Herosection.css'
import heroBg from '../../assets/herobg.jpg'

function Herosection() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Transform Your Outdoor Space</h1>
        <p>
          Premium landscaping design, installation, and maintenance services that bring nature and style
          together.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="tel:+1234567890">Call Now</a>
          <a className="btn btn-outline whatsapp-btn" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <span className="wa-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.76.46 3.48 1.34 5l-1.42 5.2 5.32-1.4a9.84 9.84 0 0 0 4.64 1.18c5.46 0 9.88-4.42 9.88-9.88S17.5 2 12.04 2Zm0 18.12c-1.5 0-2.96-.4-4.22-1.16l-.3-.18-3.16.82.84-3.08-.2-.32a8.1 8.1 0 1 1 7.04 3.92Zm4.44-6.04c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.62 6.62 0 0 1-1.96-1.2 7.36 7.36 0 0 1-1.36-1.68c-.14-.24-.02-.38.1-.5.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.08 3.58.58.24 1.04.38 1.4.48.58.18 1.1.16 1.52.1.46-.06 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  )
}

export default Herosection
