import { useEffect, useRef } from 'react'
import { gsap } from '../utils/animations'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content > *', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-obsidian border-t border-ivory/5 py-12 px-6 md:px-16"
    >
      <div className="footer-content max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <a href="#" className="group">
            <span className="font-inter font-light text-xl tracking-[0.2em] uppercase text-ivory">
              Rayao
            </span>
            <span className="font-inter font-bold text-xl tracking-[0.2em] uppercase text-terra">
              Design
            </span>
          </a>

          <nav className="flex flex-wrap gap-8">
            {['Estudio', 'Servicios', 'Proyectos', 'Contacto'].map(
              (label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="font-mono text-[11px] tracking-[0.15em] text-ivory/40 uppercase hover:text-ivory transition-colors"
                >
                  {label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-ivory/5" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8">
          <span className="font-mono text-[11px] text-ivory/25 tracking-wider">
            &copy; 2026 RAYAO DESIGN STUDIO. Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/rayaodesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ivory/30 tracking-wider uppercase hover:text-terra transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/18495146654"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ivory/30 tracking-wider uppercase hover:text-terra transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
