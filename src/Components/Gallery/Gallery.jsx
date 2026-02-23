import './Gallery.css'
import img1 from '../../assets/gallery/riza-gabriela-R3FMlH6oBSo-unsplash.jpg'
import img2 from '../../assets/gallery/annie-gavin-aqqx2yrVB2M-unsplash.jpg'
import img3 from '../../assets/gallery/fraem-gmbh-5xML_2EClnA-unsplash.jpg'
import img4 from '../../assets/gallery/michael-kahn-CWYxsqROgwo-unsplash.jpg'
import img5 from '../../assets/gallery/ronnie-george-z11gbBo13ro-unsplash.jpg'
import img6 from '../../assets/gallery/kuangkuang-xia-5MnxTpIWQ3Y-unsplash.jpg'

const galleryItems = [
  { image: img1, title: 'Rooftop Garden' },
  { image: img2, title: 'Stone Garden' },
  { image: img3, title: 'Modern Backyard' },
  { image: img4, title: 'Water Fountain Design' },
  { image: img5, title: 'Garden Lighting' },
  { image: img6, title: 'Landscape Design' }
]

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <h2>Project Gallery</h2>
          <p>Explore a few of our completed landscaping concepts and modern outdoor transformations.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
