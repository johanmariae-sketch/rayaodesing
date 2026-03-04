import { useEffect, useRef } from 'react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { gsap } from '../utils/animations'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative bg-ivory overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left - CTA */}
        <div className="contact-reveal flex flex-col justify-center px-8 md:px-20 py-20 bg-obsidian">
          <span className="font-mono text-[11px] tracking-[0.2em] text-terra uppercase">
            Contacto
          </span>

          <h2 className="mt-6 font-inter font-extralight text-4xl md:text-[4rem] leading-[1.05] tracking-[-0.03em] text-ivory">
            Rayemos{' '}
            <em className="font-playfair italic font-normal text-terra">
              tu idea.
            </em>
          </h2>

          <p className="mt-6 text-ivory/50 leading-relaxed max-w-md">
            Tu proyecto merece atencion personalizada. Escribenos para una
            consulta sin compromiso y transformemos juntos tu espacio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://wa.me/18495146654"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-terra text-obsidian font-medium text-sm tracking-[0.05em] uppercase hover:bg-terra-light transition-colors"
            >
              <Phone size={16} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rayaodesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/20 text-ivory font-medium text-sm tracking-[0.05em] uppercase hover:border-ivory/50 transition-colors"
            >
              Instagram
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right - Details */}
        <div className="contact-reveal flex flex-col justify-center px-8 md:px-20 py-20">
          <div className="space-y-10">
            <div className="group">
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-sage uppercase mb-4">
                WhatsApp
              </h4>
              <a
                href="https://wa.me/18495146654"
                target="_blank"
                rel="noopener noreferrer"
                className="font-playfair italic text-3xl md:text-4xl text-obsidian hover:text-terra transition-colors leading-tight"
              >
                +1 (849) 514-6654
              </a>
            </div>

            <div className="w-full h-[1px] bg-sage/20" />

            <div className="group">
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-sage uppercase mb-4">
                Instagram
              </h4>
              <a
                href="https://www.instagram.com/rayaodesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-playfair italic text-3xl md:text-4xl text-obsidian hover:text-terra transition-colors leading-tight"
              >
                @rayaodesign
              </a>
            </div>

            <div className="w-full h-[1px] bg-sage/20" />

            <div className="group">
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-sage uppercase mb-4">
                Ubicacion
              </h4>
              <p className="font-playfair italic text-3xl md:text-4xl text-obsidian leading-tight">
                Distrito Nacional, RD
              </p>
            </div>

            <div className="w-full h-[1px] bg-sage/20" />

            <div className="group">
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-sage uppercase mb-4">
                Horario
              </h4>
              <p className="font-inter font-light text-2xl md:text-3xl text-obsidian tracking-tight leading-snug">
                Lun — Vie: 9:00 – 7:00 PM
              </p>
              <p className="font-inter font-light text-xl md:text-2xl text-obsidian/50 tracking-tight mt-1">
                Sab: 10:00 – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
