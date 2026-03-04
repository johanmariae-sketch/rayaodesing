import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from '../utils/animations'

const projects = [
  {
    name: 'Estudio con Terracota',
    type: 'Interiorismo Residencial',
    img: '/images/proyecto-estudio-terracota.jpg',
    size: 'tall',
  },
  {
    name: 'Cocina Verde & Madera',
    type: 'Diseno de Interiores',
    img: '/images/proyecto-cocina.jpg',
    size: 'normal',
  },
  {
    name: 'Estudio Deep Sea',
    type: 'Interiorismo Residencial',
    img: '/images/proyecto-estudio-deepsea.jpg',
    size: 'normal',
  },
  {
    name: 'Sala Vacacional',
    type: 'Interiorismo Residencial',
    img: '/images/proyecto-sala-vacacional.jpg',
    size: 'tall',
  },
  {
    name: 'Recibidor Contemporaneo',
    type: 'Diseno de Interiores',
    img: '/images/proyecto-recibidor.jpg',
    size: 'normal',
  },
  {
    name: 'Bano Principal Villa',
    type: 'Interiorismo Residencial',
    img: '/images/proyecto-bano.jpg',
    size: 'normal',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.masonry-grid',
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Split into 2 columns for masonry
  const col1 = projects.filter((_, i) => i % 2 === 0)
  const col2 = projects.filter((_, i) => i % 2 !== 0)

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="bg-obsidian py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-terra uppercase">
              Portafolio
            </span>
            <h2 className="mt-4 font-inter font-extralight text-3xl md:text-[3.5rem] leading-tight tracking-[-0.03em] text-ivory">
              Proyectos{' '}
              <em className="font-playfair italic font-normal text-terra">
                seleccionados.
              </em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/rayaodesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 font-mono text-[11px] tracking-[0.15em] text-ivory/40 uppercase hover:text-terra transition-colors"
          >
            Ver mas en Instagram &rarr;
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            {col1.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          {/* Column 2 - offset */}
          <div className="flex flex-col gap-5 md:mt-16">
            {col2.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      className={`project-card group relative overflow-hidden cursor-pointer ${
        project.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'
      }`}
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="font-mono text-[10px] tracking-[0.15em] text-terra uppercase">
          {project.type}
        </span>
        <h3 className="mt-1 font-inter font-medium text-lg text-ivory">
          {project.name}
        </h3>
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <ArrowUpRight size={20} className="text-ivory" />
      </div>
    </div>
  )
}
