import { useEffect, useRef } from 'react'
import { gsap } from '../utils/animations'

const steps = [
  {
    num: '01',
    title: 'Consulta',
    desc: 'Nos reunimos para entender tu vision, tu estilo y como vives tu espacio. Analizamos necesidades y definimos el concepto creativo.',
  },
  {
    num: '02',
    title: 'Concepto',
    desc: 'Desarrollamos moodboards, renders 3D y propuestas de materiales. Cada detalle se disena para que funcionalidad y estetica hablen el mismo idioma.',
  },
  {
    num: '03',
    title: 'Desarrollo',
    desc: 'Ejecutamos el proyecto con supervision constante. Desde el mobiliario a medida hasta la iluminacion, cada pieza se verifica para garantizar calidad.',
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Tu espacio transformado, listo para vivir. Acabados impecables, cada elemento en su lugar y una experiencia que refleja tu esencia.',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-header > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-header',
          start: 'top 80%',
        },
      })

      gsap.from('.process-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.process-steps',
          start: 'top 75%',
        },
      })

      gsap.from('.process-step', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-steps',
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="estudio"
      ref={sectionRef}
      className="bg-ivory py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="process-header mb-20 max-w-2xl">
          <span className="font-mono text-[11px] tracking-[0.2em] text-sage-dark uppercase">
            Proceso
          </span>
          <h2 className="mt-4 font-inter font-extralight text-3xl md:text-[3.5rem] leading-tight tracking-[-0.03em] text-obsidian">
            Del concepto a la{' '}
            <em className="font-playfair italic font-normal text-sage-dark">
              realidad.
            </em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="process-steps relative">
          {/* Connecting line */}
          <div className="process-line hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-sage/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="process-step relative">
                {/* Dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full border-2 border-terra bg-ivory items-center justify-center mb-8 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-terra" />
                </div>

                <span className="font-mono text-[11px] tracking-[0.2em] text-terra uppercase">
                  {num}
                </span>
                <h3 className="mt-2 font-inter font-bold text-xl tracking-[-0.02em] text-obsidian">
                  {title}
                </h3>
                <p className="mt-3 text-slate text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
