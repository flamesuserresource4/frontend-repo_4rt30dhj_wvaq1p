import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Brand design for Aurora',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1653974127365-b0842d549cb7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce product UX',
    tag: 'Product',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Interactive portfolio site',
    tag: 'Web',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600 max-w-xl">A mix of product design, brand identity, and web experiments. More case studies available upon request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">Request full portfolio</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-xs rounded-full bg-gray-100 text-gray-700 px-2 py-1">{p.tag}</span>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
