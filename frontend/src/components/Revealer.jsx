// ── Revealer.jsx ─────────────────────────────────────────────
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Revealer() {
  const { pathname } = useLocation()
  useEffect(() => {
    const run = () => {
      const io = new IntersectionObserver(
        es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target) } }),
        { threshold: .1, rootMargin: '0px 0px -36px 0px' }
      )
      document.querySelectorAll('.rev').forEach(el => io.observe(el))
      return io
    }
    const t = setTimeout(() => { const io = run(); return () => io.disconnect() }, 80)
    return () => clearTimeout(t)
  }, [pathname])
  return null
}
