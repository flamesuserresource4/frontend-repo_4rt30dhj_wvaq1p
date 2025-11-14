import { Menu, X, Palette, Instagram, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white">
            <Palette size={18} />
          </div>
          <span>Designer Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-gray-100"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-gray-100"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-lg hover:bg-gray-100"><Mail size={18} /></a>
          </div>
          <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">
            Let’s talk
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/50 bg-white">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-gray-800">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block w-full text-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium">
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
