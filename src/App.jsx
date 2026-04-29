import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Adaptable from './components/Adaptable'
import PortfolioGrid from './components/PortfolioGrid'
import About from './components/About'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-space overflow-x-hidden">
      {/* Background layers */}
      <div className="noise-overlay" />
      <div className="grid-bg" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Adaptable />
          <PortfolioGrid />
          <About />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
