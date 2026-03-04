import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollMorph } from '../hooks/useScrollMorph'

const navLinks = [
  { label: 'Estudio', href: '#estudio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const isScrolled = useScrollMorph('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isScrolled
              ? 'bg-obsidian/90 backdrop-blur-2xl border-b border-ivory/5'
              : 'bg-transparent'
          }`}
        >
          <a href="#" className="group">
            <span
              className={`font-inter font-light text-[1.35rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
                isScrolled ? 'text-ivory' : 'text-ivory'
              }`}
            >
              Rayao
            </span>
            <span className="font-inter font-bold text-[1.35rem] tracking-[0.2em] uppercase text-terra">
              Design
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-light tracking-[0.1em] uppercase text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 px-6 py-2.5 text-[13px] font-medium tracking-[0.05em] uppercase border border-terra/50 text-terra hover:bg-terra hover:text-obsidian transition-all duration-300"
            >
              Rayemos tu idea
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-ivory p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col items-start justify-center px-10 gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ivory text-[2.5rem] font-light tracking-[0.1em] uppercase opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="font-mono text-terra text-sm mr-4">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-3 border border-terra text-terra font-medium text-sm tracking-[0.1em] uppercase hover:bg-terra hover:text-obsidian transition-all duration-300"
          >
            Rayemos tu idea
          </a>
        </div>
      )}
    </>
  )
}
