// ── Cursor.jsx ────────────────────────────────────────────────
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const pos  = useRef({ x: 0, y: 0 })
  const lag  = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer:coarse)').matches) return
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      lag.current.x += (pos.current.x - lag.current.x) * .13
      lag.current.y += (pos.current.y - lag.current.y) * .13
      if (dot.current)  { dot.current.style.left  = pos.current.x + 'px'; dot.current.style.top  = pos.current.y + 'px' }
      if (ring.current) { ring.current.style.left = lag.current.x + 'px'; ring.current.style.top = lag.current.y + 'px' }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const over = () => ring.current?.classList.add('hov')
    const out  = () => ring.current?.classList.remove('hov')
    const attach = () => document.querySelectorAll('a,button,[data-h]').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })
    attach()
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf.current); mo.disconnect() }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dot}  />
      <div id="cursor-ring" ref={ring} />
    </>
  )
}
