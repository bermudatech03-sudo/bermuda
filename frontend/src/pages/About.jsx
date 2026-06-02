import { Link } from 'react-router-dom'
import s from './Inner.module.css'

const TEAM = [
  { n:'Arjun Menon',    r:'Co-founder & CEO'        },
  { n:'Priya Nair',     r:'Co-founder & CTO'        },
  { n:'Karan Mehta',    r:'Head of Design'          },
  { n:'Divya Pillai',   r:'Lead Engineer'           },
  { n:'Rohan Das',      r:'DevOps Lead'             },
  { n:'Sneha Krishnan', r:'Product Manager'         },
  { n:'Aditya Sharma',  r:'Mobile Lead'             },
  { n:'Meera Iyer',     r:'Business Development'    },
]

const VALS = [
  { ic:'◈', t:'Craft first',          d:'We obsess over details most teams skip. Every pixel, every query, every commit.' },
  { ic:'◉', t:'Radical transparency', d:'No surprises. You always know the status, blockers and honest timeline.' },
  { ic:'◌', t:'Ship, then improve',   d:'Done is better than perfect in a silo. Launch, learn, iterate.' },
  { ic:'⬡', t:'Users before clients', d:'We design for end users first. Happy users = successful products.' },
  { ic:'⬢', t:'Own the outcome',      d:'We think like co-founders. If your product wins, we win.' },
  { ic:'⬣', t:'Keep growing',         d:'Every project makes us sharper. We invest in learning and each other.' },
]

const STATS = [
  { v:'5+',  l:'Years in business'  },
  { v:'50+',l:'Projects delivered' },
  // { v:'30+', l:'Countries reached'  },
  { v:'98%', l:'Client satisfaction'},
]

export default function About() {
  return (
    <main style={{ paddingTop: '5rem' }}>
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="ey">Who We Are</span>
          <h1 className="d1" style={{ marginTop: '.25rem' }}>A studio that <span className="tg">ships</span></h1>
          <p className="bl t2" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Bermuda Tech is a digital product studio based in Chennai, India, building for clients worldwide.
            We're engineers, designers and strategists who love hard problems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="sec">
        <div className="wrap">
          <div className={s.missionGrid}>
            <div>
              <span className="ey">Our Mission</span>
              <h2 className="d1" style={{ marginBottom: '1.5rem' }}>Technology that <span className="tg">moves</span> people</h2>
              <p className="bl t2" style={{ marginBottom: '1.25rem' }}>
                We started Bermuda Tech because we were tired of agencies that overpromised and underdelivered.
                We wanted a studio where the people writing code actually care about the product.
              </p>
              <p className="bm t2" style={{ marginBottom: '2rem' }}>
                Today we work with startups, scale-ups and enterprises across India, Africa and Europe — building
                products that are fast, accessible, beautiful and built to last.
              </p>
              <Link to="/contact" className="btn btn-p btn-lg">Work With Us</Link>
            </div>
            <div className={s.missionImg}>⬡</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec" style={{ background: 'var(--bg1)', borderTop: '1px solid var(--b1)', borderBottom: '1px solid var(--b1)' }}>
        <div className="wrap">
          <div className="rev" style={{ marginBottom: '2.5rem' }}>
            <span className="ey">What We Believe</span>
            <h2 className="d1">Our <span className="tg">values</span></h2>
          </div>
          <div className={s.valGrid}>
            {VALS.map((v, i) => (
              <div key={v.t} className={`${s.valCard} card rev d${(i % 3) + 1}r`}>
                <div className={s.valIc}>{v.ic}</div>
                <h3 className="h3">{v.t}</h3>
                <p className="bs t2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec">
        <div className="wrap">
          <div className="rev" style={{ marginBottom: '2.5rem' }}>
            <span className="ey">The Team</span>
            <h2 className="d1">People who <span className="tg">build</span></h2>
          </div>
          <div className={s.teamGrid}>
            {TEAM.map((m, i) => (
              <div key={m.n} className={`${s.teamCard} card rev d${(i % 4) + 1}r`}>
                <div className={s.teamAva}>{m.n[0]}</div>
                <div className={s.teamName}>{m.n}</div>
                <div className={s.teamRole}>{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--bg1)', borderTop: '1px solid var(--b1)', borderBottom: '1px solid var(--b1)', padding: 'clamp(2rem,4vw,3rem) 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: 'var(--b1)' }}>
            {STATS.map((st) => (
              <div key={st.l} className="rev"
                style={{ textAlign: 'center', padding: 'clamp(1.2rem,3vw,1.5rem)', background: 'var(--bg1)' }}>
                <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'var(--g)', lineHeight: 1, marginBottom: '.4rem' }}>{st.v}</div>
                <div style={{ fontSize: 'clamp(.78rem,1.2vw,.85rem)', color: 'var(--t2)' }}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="ey">Join Us</span>
          <h2 className="d1" style={{ marginBottom: '1rem' }}>Want to <span className="tg">build with us</span>?</h2>
          <p className="bl t2" style={{ marginBottom: '2rem' }}>We're always looking for sharp people who care about craft.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/careers" className="btn btn-p btn-xl">See Open Roles</Link>
            <Link to="/contact" className="btn btn-o btn-xl">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
