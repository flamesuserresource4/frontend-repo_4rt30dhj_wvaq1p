import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
              Available for freelance projects
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              I design playful, modern interfaces for ambitious brands
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Portfolio showcasing product design, brand systems, and interactive web experiences.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
                See my work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 ring-1 ring-gray-200 px-5 py-3 text-sm font-medium hover:bg-gray-50">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
