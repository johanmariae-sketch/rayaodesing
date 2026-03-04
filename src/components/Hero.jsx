import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../utils/animations'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from('.hero-overline', {
        width: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      })
        .from(
          '.hero-title-word',
          {
            y: 120,
            opacity: 0,
            rotateX: 40,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          '.hero-subtitle',
          { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          '.hero-scroll-hint',
          { opacity: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )

      // Marquee
      gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      // Parallax
      gsap.to('.hero-bg-image', {
        y: '25%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const marqueeText = 'INTERIORISMO \u00b7 MOBILIARIO \u00b7 SET DESIGN \u00b7 RENDER 3D \u00b7 '

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100dvh] overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-main.jpg"
          alt="RAYAO Design Studio - Interiorismo y Mobiliario"
          className="hero-bg-image w-full h-full object-cover scale-110 opacity-40"
          fetchpriority="high"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="hero-overline w-16 h-[1px] bg-terra mb-8 overflow-hidden" />

        <h1 className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-5">
            {'Rayando el limite entre'.split(' ').map((word, i) => (
              <span
                key={i}
                className="hero-title-word inline-block font-inter font-extralight text-[2.2rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1] tracking-[-0.04em] text-ivory"
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <span className="hero-title-word inline-block font-playfair italic text-[3rem] md:text-[5.5rem] lg:text-[7rem] leading-[1] tracking-[-0.02em] text-terra">
              el arte y el espacio.
            </span>
          </div>
        </h1>

        <p className="hero-subtitle mt-8 font-inter font-light text-sm md:text-base text-ivory/50 tracking-[0.15em] uppercase max-w-lg">
          Interiorismo &middot; Mobiliario a medida &middot; Set Design
        </p>

        <div className="hero-scroll-hint absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ivory/30 uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-ivory/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-terra animate-pulse" />
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/5 bg-obsidian/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-[0.3em] text-ivory/20 uppercase mx-0"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
