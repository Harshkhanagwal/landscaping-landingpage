import './About.css'
import aboutImage from '../../assets/about.jpg'

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-content">
          <h2>About Landscaping</h2>
          <p>
            Landscaping is a trusted landscaping dealer and service provider focused on creating outdoor
            spaces that feel elegant, practical, and timeless. From home gardens to commercial green zones,
            our team combines expert planning, quality materials, and precise execution.
          </p>
          <p>
            We handle every step from concept to care, ensuring your garden stays healthy, beautiful, and
            easy to maintain all year round.
          </p>
        </div>
        <div className="about-image-wrap">
          <img src={aboutImage} alt="Landscaping team creating a modern garden" />
        </div>
      </div>
    </section>
  )
}

export default About
