import { PenTool, Shapes, MousePointerClick } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Product Design',
    desc: 'From concept to polished UI. Flows, wireframes, prototypes, and high-fidelity design systems.'
  },
  {
    icon: Shapes,
    title: 'Brand Identity',
    desc: 'Logos, typography, color, and guidelines to make your brand cohesive and memorable.'
  },
  {
    icon: MousePointerClick,
    title: 'Web & Interaction',
    desc: 'Landing pages and portfolios with playful, modern interactions that perform.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Flexible engagement models — from quick sprints to ongoing partnerships.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
              <div className="h-11 w-11 rounded-xl bg-gray-900 text-white grid place-items-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
