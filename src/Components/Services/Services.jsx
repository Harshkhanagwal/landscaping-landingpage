import './Services.css'

const services = [
  {
    title: 'Rooftop Garden',
    desc: 'Smart rooftop planting systems that maximize green space with efficient drainage and structure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16" />
        <path d="M6 20V10h12v10" />
        <path d="M12 10V4" />
        <path d="M9 7c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5" />
      </svg>
    )
  },
  {
    title: 'Stone Garden',
    desc: 'Textured stone-based layouts that add low-maintenance elegance and long-term durability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14 8 8l4 3 4-5 4 8-4 6H8Z" />
      </svg>
    )
  },
  {
    title: 'Lawn Maintenance',
    desc: 'Routine mowing, trimming, seasonal feeding, and weed control for healthy, vibrant lawns.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16" />
        <path d="M7 20c0-3 2-5 5-5" />
        <path d="M12 15c0-3 2-5 5-5" />
      </svg>
    )
  },
  {
    title: 'Water Features',
    desc: 'Custom fountains and water elements that create a premium and calming outdoor atmosphere.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3s4 5 4 8a4 4 0 1 1-8 0c0-3 4-8 4-8Z" />
        <path d="M6 20h12" />
      </svg>
    )
  },
  {
    title: 'Garden Lighting',
    desc: 'Layered outdoor lighting design to improve safety, usability, and nighttime visual appeal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14c-1.2-.9-2-2.3-2-4a6 6 0 1 1 12 0c0 1.7-.8 3.1-2 4l-1 2h-6Z" />
      </svg>
    )
  },
  {
    title: 'Landscape Design',
    desc: 'Complete concept-to-installation planning tailored to your site, style, and maintenance goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19 20 5" />
        <path d="m8 5 11 11" />
        <path d="M5 8v11h11" />
      </svg>
    )
  }
]

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <h2>Our Services</h2>
          <p>End-to-end outdoor solutions designed to increase curb appeal, comfort, and property value.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
