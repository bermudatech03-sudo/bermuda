import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient.js'
import s from './Inner.module.css'

function fmt(d) {
  return new Date(d).toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'numeric' })
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.from('blog_posts').select('*').eq('is_published',true).order('published_at', { ascending: false })
      .then(({ data }) => data && setPosts(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main style={{paddingTop:'5rem'}}>
      <section className={s.hero}>
        <div className={s.heroBg}/>
        <div className="wrap" style={{position:'relative',zIndex:2}}>
          <span className="ey">Insights</span>
          <h1 className="d1" style={{marginTop:'.25rem'}}>The <span className="tg">blog</span></h1>
          <p className="bl t2" style={{maxWidth:'440px',marginTop:'1rem'}}>
            Engineering deep-dives, design thinking, business lessons from the studio.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {loading
            ? <div className={s.blogGrid}>{[1,2,3].map(i=><div key={i} className="skel" style={{height:'320px'}}/>)}</div>
            : posts.length === 0
              ? <p className="bm t2">No posts yet — check back soon.</p>
              : <div className={s.blogGrid}>
                  {posts.map((p,i) => (
                    <div key={p.id} className={`${s.blogCard} rev d${(i%3)+1}r`}>
                      <div className={s.blogImg}>
                        {p.cover_url ? <img src={p.cover_url} alt={p.title}/> : '✦'}
                      </div>
                      <div className={s.blogBody}>
                        <div className={s.blogMeta}>
                          <span className={s.blogDate}>{fmt(p.published_at || p.created_at)}</span>
                          <span className="mono t3">{p.read_time} min read</span>
                        </div>
                        <h3 className="h3" style={{color:'var(--t1)'}}>{p.title}</h3>
                        <p className="bs t2">{p.excerpt}</p>
                        <div className={s.tagRow}>{p.tags?.map(t=><span key={t} className="tag">{t}</span>)}</div>
                        <a href="#" className="btn btn-o btn-sm" style={{marginTop:'.5rem',width:'fit-content'}}>Read more →</a>
                      </div>
                    </div>
                  ))}
                </div>
          }
        </div>
      </section>
    </main>
  )
}
