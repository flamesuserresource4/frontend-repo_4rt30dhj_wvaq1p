import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // In a real project, submit to backend or email service
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Let’s build something great</h2>
          <p className="mt-2 text-gray-600">Tell me a bit about your project and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input required className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-700">Project details</label>
            <textarea rows="5" required className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">Send inquiry</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
