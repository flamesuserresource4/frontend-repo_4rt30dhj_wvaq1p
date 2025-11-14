export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2 items-center">
        <div className="rounded-3xl overflow-hidden ring-1 ring-gray-200">
          <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1200&auto=format&fit=crop" alt="Designer portrait" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Hello, I’m Alex — a multidisciplinary designer</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I craft experiences across product, brand, and web. I love playful interactions, bold typography, and clear systems.
            My work has helped startups raise funding and products reach millions of users.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <dt className="text-gray-600">Experience</dt>
              <dd className="mt-1 font-medium text-gray-900">7+ years</dd>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <dt className="text-gray-600">Focus</dt>
              <dd className="mt-1 font-medium text-gray-900">Product & Brand</dd>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <dt className="text-gray-600">Location</dt>
              <dd className="mt-1 font-medium text-gray-900">Remote (GMT-5)</dd>
            </div>
            <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-gray-200">
              <dt className="text-gray-600">Availability</dt>
              <dd className="mt-1 font-medium text-gray-900">Open to freelance</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
