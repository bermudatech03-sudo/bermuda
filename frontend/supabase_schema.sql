-- ================================================================
-- BERMUDA TECH — Supabase Schema
-- Paste the entire file into Supabase Dashboard → SQL Editor → Run
-- ================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name       VARCHAR(120)  NOT NULL,
  email      VARCHAR(180)  NOT NULL,
  phone      VARCHAR(30),
  company    VARCHAR(150),
  service    VARCHAR(100),
  budget     VARCHAR(60),
  message    TEXT          NOT NULL,
  is_read    BOOLEAN       NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email         VARCHAR(180) UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Portfolio projects (admin-managed via Supabase dashboard)
CREATE TABLE IF NOT EXISTS projects (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       VARCHAR(200) NOT NULL,
  slug        VARCHAR(220) UNIQUE NOT NULL,
  category    VARCHAR(80),
  description TEXT,
  tech_stack  TEXT[],
  image_url   TEXT,
  live_url    TEXT,
  is_featured BOOLEAN      NOT NULL DEFAULT FALSE,
  sort_order  INT          NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name VARCHAR(120) NOT NULL,
  role        VARCHAR(120),
  company     VARCHAR(150),
  quote       TEXT         NOT NULL,
  rating      INT          DEFAULT 5,
  is_active   BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order  INT          NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title        VARCHAR(300) NOT NULL,
  slug         VARCHAR(320) UNIQUE NOT NULL,
  excerpt      TEXT,
  content      TEXT,
  cover_url    TEXT,
  author       VARCHAR(120) DEFAULT 'Bermuda Tech',
  tags         TEXT[],
  read_time    INT          DEFAULT 5,
  is_published BOOLEAN      NOT NULL DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Job openings
CREATE TABLE IF NOT EXISTS jobs (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title        VARCHAR(200) NOT NULL,
  department   VARCHAR(100),
  type         VARCHAR(50),
  location     VARCHAR(120),
  description  TEXT,
  requirements TEXT[],
  is_active    BOOLEAN      NOT NULL DEFAULT TRUE,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Job applications
CREATE TABLE IF NOT EXISTS job_applications (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id        UUID REFERENCES jobs(id) ON DELETE SET NULL,
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(180) NOT NULL,
  phone         VARCHAR(30),
  portfolio_url TEXT,
  cover_letter  TEXT,
  status        VARCHAR(30)  NOT NULL DEFAULT 'NEW',
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ── SEED DATA ─────────────────────────────────────────────────

INSERT INTO projects (title, slug, category, description, tech_stack, is_featured, sort_order) VALUES
  ('FinFlow Analytics',   'finflow-analytics',  'Web Development',
   'Real-time financial analytics dashboard with live data streams and AI-powered insights.',
   ARRAY['React','Node.js','PostgreSQL','AWS'], TRUE, 1),
  ('GreenGrid Mobile',    'greengrid-mobile',   'Mobile App',
   'Cross-platform app for smart energy monitoring across 200+ grid stations.',
   ARRAY['React Native','Python','Firebase'], TRUE, 2),
  ('ShopNova Commerce',   'shopnova-commerce',  'E-Commerce',
   'Headless commerce store with sub-1s page loads and 99.9% uptime SLA.',
   ARRAY['Next.js','Shopify','Sanity','Vercel'], TRUE, 3),
  ('NovaTech Rebrand',    'novatech-rebrand',   'UI/UX Design',
   'Complete brand identity and design system for a 500-person SaaS company.',
   ARRAY['Figma','Framer','Storybook'], FALSE, 4),
  ('CloudSprint DevOps',  'cloudsprint-devops', 'Cloud & DevOps',
   'Zero-downtime CI/CD pipeline and Kubernetes infrastructure for 10M req/day.',
   ARRAY['AWS','Kubernetes','Terraform','GitHub Actions'], FALSE, 5),
  ('EduTrack LMS',        'edutrack-lms',       'Web Development',
   'Full-stack LMS with live streaming, assessments and detailed analytics.',
   ARRAY['Next.js','Django','Redis','PostgreSQL'], FALSE, 6);

INSERT INTO testimonials (client_name, role, company, quote, rating, sort_order) VALUES
  ('Priya Sharma',    'CTO',             'NovaTech India',
   'Bermuda Tech transformed our legacy platform into a blazing-fast React app in just 6 weeks. Absolutely elite execution — on time, on budget, above spec.', 5, 1),
  ('James Okafor',    'Founder',         'Finflow Africa',
   'Their UI/UX team redesigned our entire product. User engagement went up 140% in the first month. Worth every rupee.', 5, 2),
  ('Ananya Krishnan', 'Product Manager', 'CloudSprint',
   'The mobile app they built handles 50k+ daily active users without a hiccup. Solid engineering, great communication.', 5, 3),
  ('Ravi Menon',      'CEO',             'GreenGrid Energy',
   'From branding to full-stack dev, Bermuda Tech delivered everything on time and consistently exceeded expectations.', 5, 4);

INSERT INTO blog_posts (title, slug, excerpt, tags, read_time, is_published, published_at) VALUES
  ('Why React Server Components Will Change Everything in 2025',
   'react-server-components-2025',
   'A deep dive into RSC architecture and why every serious team needs to understand the shift happening right now.',
   ARRAY['React','Frontend','Performance'], 8, TRUE, NOW() - INTERVAL '5 days'),
  ('Building for Bharat: Mobile-First Dev in India',
   'building-for-bharat',
   'Latency, data costs, and UX patterns for the next billion users — a practical engineering guide.',
   ARRAY['Mobile','India','UX'], 6, TRUE, NOW() - INTERVAL '12 days'),
  ('The True Cost of Bad UI/UX (With Real Data)',
   'true-cost-of-bad-ux',
   'How poor design decisions quietly drain revenue — and the measurable ROI of investing in UX.',
   ARRAY['Design','UX','Business'], 5, TRUE, NOW() - INTERVAL '20 days');

INSERT INTO jobs (title, department, type, location, description, requirements, is_active) VALUES
  ('Senior Full-Stack Engineer', 'Engineering', 'Full-time', 'Remote / Chennai',
   'Build and scale production apps for our global clients. Own features end-to-end.',
   ARRAY['4+ yrs React & Node.js','Strong system design','PostgreSQL or MongoDB','REST & GraphQL'], TRUE),
  ('UI/UX Designer', 'Design', 'Full-time', 'Remote / Chennai',
   'Design exceptional experiences for web and mobile products that delight millions.',
   ARRAY['3+ yrs product design','Figma power user','Design systems exp','Portfolio required'], TRUE),
  ('DevOps Engineer', 'Infrastructure', 'Full-time', 'Remote',
   'Own cloud infra, CI/CD pipelines and reliability engineering on AWS and GCP.',
   ARRAY['AWS or GCP certified','Kubernetes & Terraform','4+ yrs DevOps/SRE','On-call rotation'], TRUE),
  ('Business Development Executive', 'Sales', 'Full-time', 'Chennai / Hybrid',
   'Drive client acquisition and manage key accounts across domestic and international markets.',
   ARRAY['2+ yrs B2B IT sales','Strong communication','CRM experience','Agency background preferred'], TRUE);

-- ── ROW LEVEL SECURITY ─────────────────────────────────────────

ALTER TABLE contact_submissions    ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects               ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials           ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts             ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs                   ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications       ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "anon_read_projects"     ON projects      FOR SELECT TO anon USING (TRUE);
CREATE POLICY "anon_read_testimonials" ON testimonials  FOR SELECT TO anon USING (is_active = TRUE);
CREATE POLICY "anon_read_blogs"        ON blog_posts    FOR SELECT TO anon USING (is_published = TRUE);
CREATE POLICY "anon_read_jobs"         ON jobs          FOR SELECT TO anon USING (is_active = TRUE);

-- Public insert (forms)
CREATE POLICY "anon_insert_contact"    ON contact_submissions    FOR INSERT TO anon WITH CHECK (TRUE);
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (TRUE);
CREATE POLICY "anon_insert_job_app"    ON job_applications       FOR INSERT TO anon WITH CHECK (TRUE);

-- Service role full access (for your admin panel later)
CREATE POLICY "service_all_contact"   ON contact_submissions    FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_news"      ON newsletter_subscribers FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_projects"  ON projects               FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_test"      ON testimonials           FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_blogs"     ON blog_posts             FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_jobs"      ON jobs                   FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
CREATE POLICY "service_all_job_app"   ON job_applications       FOR ALL TO service_role USING (TRUE) WITH CHECK (TRUE);
