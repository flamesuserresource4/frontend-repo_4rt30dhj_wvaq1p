import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Alex Designer. All rights reserved.</p>
          <a href="#home" className="rounded-lg px-3 py-1 ring-1 ring-gray-200 hover:bg-gray-50">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
