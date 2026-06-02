import { Link } from 'react-router-dom'
import s from './Inner.module.css'

const SVCS = [
  { id:'web',       ic:'⬡', n:'01', title:'Web Development',       tag:'From landing pages to enterprise SaaS',
    desc:'We engineer full-stack web applications that are fast, scalable, and maintainable. React, Next.js, Vue, Node.js, Django, FastAPI — whatever the job needs.',
    items:['Custom web apps (React, Next.js, Vue)','Backend APIs (Node.js, Django, FastAPI)','Database architecture — PostgreSQL, MongoDB, Redis','Headless CMS (Sanity, Contentful, Strapi)','E-Commerce (Shopify, WooCommerce, custom)','Performance & Core Web Vitals optimisation'] },
  { id:'mobile',    ic:'◈', n:'02', title:'Mobile App Development', tag:'Cross-platform apps users actually keep',
    desc:'React Native for iOS and Android. We handle design, development, store submission and post-launch monitoring — everything.',
    items:['React Native (iOS + Android)','App Store & Play Store submission','Push notifications & real-time features','Offline-first architecture','App performance & crash monitoring','Native module integration when needed'] },
  { id:'design',    ic:'◉', n:'03', title:'UI/UX Design',           tag:'Beautiful products that convert and retain',
    desc:'User research, wireframes, high-fidelity Figma prototypes and living design systems. We validate before developers write a line.',
    items:['UX research & user journey mapping','Wireframing & interactive Figma prototypes','High-fidelity UI design & micro-interactions','Design systems & component libraries','Brand identity & logo design','Usability testing & iterative refinement'] },
  { id:'cloud',     ic:'◌', n:'04', title:'Cloud & DevOps',         tag:'Infrastructure that scales with you',
    desc:'AWS, GCP, Azure. Kubernetes clusters, Terraform IaC, zero-downtime CI/CD pipelines and cost-optimised architecture.',
    items:['AWS / GCP / Azure architecture & migration','Kubernetes & container orchestration','Terraform infrastructure-as-code','CI/CD with GitHub Actions or GitLab','Database replication & automated backups','Cost optimisation & FinOps reporting'] },
  { id:'marketing', ic:'⬢', n:'05', title:'Digital Marketing & SEO',tag:'Growth that compounds',
    desc:'Technical SEO, content strategy, PPC and social. We focus on pipeline and revenue, not vanity metrics.',
    items:['Technical SEO audits & ongoing work','Content strategy & copywriting','Google & Meta paid ads (PPC)','Social media management & growth','Email marketing & automation flows','Analytics, attribution & CRO'] },
  { id:'security',  ic:'⬣', n:'06', title:'Cybersecurity',          tag:'Breaches cost more than prevention',
    desc:'Penetration testing, VAPT reports, security code reviews and compliance consulting. We find the holes before attackers do.',
    items:['Web & API penetration testing','Vulnerability assessment (VAPT)','Security code review & hardening','OWASP Top 10 compliance','SSL/TLS configuration & audit','Incident response planning'] },
]

export default function Services() {
  return (
    <main style={{paddingTop:'5rem'}}>
      <section className={s.hero}>
        <div className={s.heroBg}/>
        <div className="wrap" style={{position:'relative',zIndex:2}}>
          <span className="ey">What We Do</span>
          <h1 className="d1" style={{marginTop:'.25rem'}}>Services that <span className="tg">actually ship</span></h1>
          <p className="bl t2" style={{maxWidth:'520px',marginTop:'1rem'}}>
            End-to-end digital services — design to deployment. One studio, full stack.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className={s.svcList}>
            {SVCS.map((sv,i) => (
              <div id={sv.id} key={sv.id} className={`${s.svcRow} card p25 rev`}>
                <div className={s.svcLeft}>
                  <div className={s.svcIcLg}>{sv.ic}</div>
                  <div>
                    <span className="ey">{sv.n}</span>
                    <h2 className="h2">{sv.title}</h2>
                    <p className="mono" style={{color:'var(--g)',marginTop:'.35rem'}}>{sv.tag}</p>
                  </div>
                </div>
                <div className={s.svcRight}>
                  <p className="bm t2">{sv.desc}</p>
                  <ul className={s.items}>
                    {sv.items.map(it => (
                      <li key={it} className={s.item}>
                        <span style={{color:'var(--g)'}}>→</span><span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-o btn-sm" style={{marginTop:'1.4rem',width:'fit-content'}}>
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className="wrap" style={{textAlign:'center'}}>
          <span className="ey">Ready?</span>
          <h2 className="d1" style={{marginBottom:'1rem'}}>Let's <span className="tg">talk scope</span></h2>
          <p className="bl t2" style={{marginBottom:'2rem'}}>Tell us what you're building. We'll tell you what it takes.</p>
          <Link to="/contact" className="btn btn-p btn-xl">Start a Conversation</Link>
        </div>
      </section>
    </main>
  )
}
