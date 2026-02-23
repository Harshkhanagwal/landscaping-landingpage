import './App.css'
import Header from './Components/Header/Header'
import Herosection from './Components/Herosection/Herosection'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Herosection />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
