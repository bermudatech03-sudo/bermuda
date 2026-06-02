import { useState } from 'react'

let _add = null
export function toast(msg, type = 'ok') { _add?.({ msg, type, id: Date.now() }) }

export default function Toaster() {
  const [list, setList] = useState([])
  _add = t => {
    setList(p => [...p, t])
    setTimeout(() => setList(p => p.filter(x => x.id !== t.id)), 4500)
  }
  return (
    <div id="toast-root">
      {list.map(t => (
        <div key={t.id} className={`toast ${t.type}`}>
          <div className="t-dot" />{t.msg}
        </div>
      ))}
    </div>
  )
}
