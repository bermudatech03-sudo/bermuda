import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient.js'
import { toast } from '../components/Toaster.jsx'
import s from './Inner.module.css'

function JobCard({ job }) {
  const [open, setOpen]       = useState(false)
  const [applying, setApply]  = useState(false)
  const [form, setForm]       = useState({ name:'', email:'', phone:'', portfolio_url:'', cover_letter:'' })
  const [sending, setSending] = useState(false)

  const submit = async e => {
    e.preventDefault()
    setSending(true)
    const { error } = await supabase.from('job_applications').insert({ ...form, job_id: job.id })
    setSending(false)
    if (error) { toast('Failed to send. Try again.','err'); return }
    toast("Application sent! We'll be in touch 🚀",'ok')
    setApply(false)
    setForm({ name:'', email:'', phone:'', portfolio_url:'', cover_letter:'' })
  }

  return (
    <div className={`${s.jobCard} ${open ? s.open : ''}`}>
      <div className={s.jobHead} onClick={() => { setOpen(v=>!v); setApply(false) }} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(v=>!v)}>
        <div className={s.jobL}>
          <div className={s.jobTitle}>{job.title}</div>
          <div className={s.jobMeta}>
            {[job.type, job.department, job.location].filter(Boolean).map(t => (
              <span key={t} className={s.jbadge}>{t}</span>
            ))}
          </div>
        </div>
        <span className={`${s.jobChevron} ${open ? s.up : ''}`}>⌄</span>
      </div>
      <div className={`${s.jobBody} ${open ? s.show : ''}`}>
        <p className="bm t2">{job.description}</p>
        <ul className={s.reqList}>
          {job.requirements?.map(r => (
            <li key={r} className={s.reqItem}>
              <span style={{ color:'var(--g)',flexShrink:0 }}>✓</span><span>{r}</span>
            </li>
          ))}
        </ul>
        {!applying ? (
          <button className="btn btn-p btn-sm" onClick={() => setApply(true)}>Apply Now →</button>
        ) : (
          <form onSubmit={submit}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1rem', marginBottom:'1rem' }}>
              {[
                { k:'name',          lbl:'Full Name *',        t:'text',  req:true },
                { k:'email',         lbl:'Email *',            t:'email', req:true },
                { k:'phone',         lbl:'Phone',              t:'tel',   req:false },
                { k:'portfolio_url', lbl:'Portfolio / GitHub', t:'url',   req:false },
              ].map(f => (
                <div key={f.k} className="fg">
                  <label className="lbl">{f.lbl}</label>
                  <input className="inp" type={f.t} required={f.req}
                    value={form[f.k]} onChange={e => setForm(p => ({...p,[f.k]:e.target.value}))} />
                </div>
              ))}
            </div>
            <div className="fg" style={{ marginBottom:'1rem' }}>
              <label className="lbl">Cover Letter</label>
              <textarea className="inp" rows={4} placeholder="Tell us why you're a great fit..."
                value={form.cover_letter} onChange={e => setForm(p => ({...p,cover_letter:e.target.value}))} />
            </div>
            <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap' }}>
              <button type="submit" className="btn btn-p btn-sm" disabled={sending}>{sending ? 'Sending...' : 'Submit Application'}</button>
              <button type="button" className="btn btn-g btn-sm" onClick={() => setApply(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

const PERKS = [
  { ic:'◈', t:'Remote-first',    d:"Work from anywhere. We optimise for outcomes, not office hours." },
  { ic:'◉', t:'Real ownership',  d:"You own your work end-to-end. No ticket pushers — real engineers." },
  { ic:'◌', t:'Fast learning',   d:"Ship to real users weekly. You'll grow faster here than anywhere else." },
  { ic:'⬡', t:'Competitive pay', d:"Market rates or better, with performance reviews every 6 months." },
  { ic:'⬢', t:'Flexible hours',  d:"Core hours 11am–4pm. Your other hours, your choice." },
  { ic:'⬣', t:'Gear budget',     d:"₹50,000 setup allowance. Get the tools you need." },
]

export default function Careers() {
  const [jobs,    setJobs]    = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.from('jobs').select('*').eq('is_active',true).order('created_at')
      .then(({ data }) => data && setJobs(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main style={{ paddingTop:'5rem' }}>
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className="wrap" style={{ position:'relative', zIndex:2 }}>
          <span className="ey">Join the Team</span>
          <h1 className="d1" style={{ marginTop:'.25rem' }}>Build <span className="tg">with us</span></h1>
          <p className="bl t2" style={{ maxWidth:'480px', marginTop:'1rem' }}>
            A small, high-trust studio. Every hire makes us sharper. If you're a craftsperson who ships — we want to meet you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="sec" style={{ background:'var(--bg1)', borderBottom:'1px solid var(--b1)' }}>
        <div className="wrap">
          <div className="rev" style={{ marginBottom:'2.5rem' }}>
            <span className="ey">Why Bermuda Tech</span>
            <h2 className="d1">Perks & <span className="tg">culture</span></h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.2rem' }}>
            {PERKS.map((p, i) => (
              <div key={p.t} className={`card p2 rev d${(i%3)+1}r`} style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
                <div style={{ fontSize:'1.5rem', color:'var(--g)' }}>{p.ic}</div>
                <h3 className="h3">{p.t}</h3>
                <p className="bs t2">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="sec">
        <div className="wrap">
          <div className="rev" style={{ marginBottom:'2.5rem' }}>
            <span className="ey">Open Roles</span>
            <h2 className="d1"><span className="tg">Current</span> openings</h2>
          </div>
          {loading
            ? <div style={{ display:'flex',flexDirection:'column',gap:'.9rem' }}>
                {[1,2,3].map(i => <div key={i} className="skel" style={{ height:'80px' }} />)}
              </div>
            : jobs.length === 0
              ? <p className="bm t2">No open roles right now. Check back soon!</p>
              : <div className={s.jobList}>{jobs.map(j => <JobCard key={j.id} job={j} />)}</div>
          }
        </div>
      </section>

      <section className={s.cta}>
        <div className="wrap" style={{ textAlign:'center' }}>
          <span className="ey">Don't See a Fit?</span>
          <h2 className="d1" style={{ marginBottom:'1rem' }}>Send a <span className="tg">speculative</span> application</h2>
          <p className="bl t2" style={{ marginBottom:'2rem' }}>We keep great CVs on file. If you're sharp, we'll find a way.</p>
          <a href="mailto:careers@bermuda.tech" className="btn btn-p btn-xl">careers@bermuda.tech</a>
        </div>
      </section>
    </main>
  )
}
