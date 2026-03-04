import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '../utils/animations'

const services = [
  {
    num: '01',
    title: 'Diseno de Interiores',
    desc: 'Creamos espacios interiores donde la calidez de los materiales naturales se integra a composiciones sobrias y contemporaneas. Cada elemento esta pensado para que funcionalidad y estetica hablen el mismo idioma.',
    img: '/images/servicio-interiores.jpg',
    tags: ['Residencial', 'Comercial', 'Renders 3D'],
  },
  {
    num: '02',
    title: 'Mobiliario a Medida',
    desc: 'Disenamos mobiliario multifuncional que maximiza el espacio y se adapta a tu estilo de vida. Desde walk-in closets hasta estaciones de trabajo, cada pieza es unica y personalizada.',
    img: '/images/servicio-mobiliario.jpg',
    tags: ['Closets', 'Cocinas', 'Estaciones'],
  },
  {
    num: '03',
    title: 'Set Design',
    desc: 'Diseno de sets para producciones cinematograficas y espacios comerciales que transforman la experiencia del visitante. Del concepto al espacio construido.',
    img: '/images/servicio-setdesign.jpg',
    tags: ['Cine', 'Comercial', 'Escenografia'],
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.service-row').forEach((row) => {
        gsap.from(row.querySelector('.service-image'), {
          scale: 1.15,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 70%',
          },
        })

        gsap.from(row.querySelectorAll('.service-text > *'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 65%',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="bg-ivory py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-20">
          <span className="font-mono text-[11px] tracking-[0.2em] text-sage-dark uppercase">
            Lo que hacemos
          </span>
          <h2 className="mt-4 font-inter font-extralight text-3xl md:text-[3.5rem] leading-tight tracking-[-0.03em] text-obsidian">
            Tres disciplinas,{' '}
            <em className="font-playfair italic font-normal text-sage-dark">
              un lenguaje.
            </em>
          </h2>
        </div>
      </div>

      <div className="space-y-0">
        {services.map(({ num, title, desc, img, tags }, i) => (
          <div
            key={title}
            className={`service-row grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] ${
              i % 2 === 0 ? '' : 'lg:direction-rtl'
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden ${
                i % 2 !== 0 ? 'lg:order-2' : ''
              }`}
            >
              <img
                src={img}
                alt={title}
                className="service-image w-full h-full object-cover min-h-[50vh]"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div
              className={`service-text flex flex-col justify-center px-8 md:px-20 py-16 ${
                i % 2 === 0 ? 'bg-ivory' : 'bg-obsidian'
              } ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <span
                className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
                  i % 2 === 0 ? 'text-terra-dark' : 'text-terra'
                }`}
              >
                [{num}]
              </span>
              <h3
                className={`mt-4 font-inter font-bold text-3xl md:text-5xl tracking-[-0.03em] ${
                  i % 2 === 0 ? 'text-obsidian' : 'text-ivory'
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-5 text-base leading-relaxed max-w-md ${
                  i % 2 === 0 ? 'text-slate' : 'text-ivory/60'
                }`}
              >
                {desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-[10px] tracking-[0.1em] uppercase font-mono border ${
                      i % 2 === 0
                        ? 'border-sage/30 text-sage-dark'
                        : 'border-ivory/15 text-ivory/50'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contacto"
                className={`mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-[0.05em] uppercase group ${
                  i % 2 === 0 ? 'text-obsidian' : 'text-terra'
                }`}
              >
                Consultar
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
