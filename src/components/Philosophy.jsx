import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../utils/animations'

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-image', {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })

      gsap.from('.phil-text > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.phil-text',
          start: 'top 65%',
        },
      })

      // Parallax on image
      gsap.to('.phil-image img', {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-obsidian overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image side */}
        <div className="phil-image relative overflow-hidden">
          <img
            src="/images/filosofia.jpg"
            alt="RAYAO Design Studio - Filosofia de diseno"
            className="w-full h-full object-cover min-h-[50vh] scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-obsidian/30" />
        </div>

        {/* Quote side */}
        <div className="phil-text flex flex-col justify-center px-8 md:px-20 py-20">
          <div className="w-12 h-[1px] bg-terra mb-10" />

          <blockquote className="font-playfair italic text-3xl md:text-[2.8rem] leading-[1.2] tracking-[-0.02em] text-ivory">
            &ldquo;Disenar es
            <span className="text-terra"> rayar el limite </span>
            entre lo que existe y lo que puede ser.&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-terra/20 flex items-center justify-center">
              <span className="font-inter font-bold text-sm text-terra">
                AR
              </span>
            </div>
            <div>
              <p className="font-inter font-medium text-sm text-ivory">
                Arq. Alanis ReyCor
              </p>
              <p className="font-mono text-[11px] text-ivory/40 tracking-wider uppercase">
                Fundadora & Directora Creativa
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-ivory/10 pt-10">
            <div>
              <span className="font-mono text-2xl md:text-3xl text-ivory/90 tracking-tight">
                26+
              </span>
              <p className="mt-1 font-mono text-[10px] text-ivory/40 tracking-wider uppercase">
                Proyectos
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl md:text-3xl text-ivory/90 tracking-tight">
                3
              </span>
              <p className="mt-1 font-mono text-[10px] text-ivory/40 tracking-wider uppercase">
                Disciplinas
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl md:text-3xl text-ivory/90 tracking-tight">
                100%
              </span>
              <p className="mt-1 font-mono text-[10px] text-ivory/40 tracking-wider uppercase">
                Personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
