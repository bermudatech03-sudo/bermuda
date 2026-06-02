-- ═══════════════════════════════════════════════
-- BERMUDA TECH — Supabase leads table + RLS
-- Run in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════

-- 1. CREATE TABLE
CREATE TABLE IF NOT EXISTS public.leads (
  id          BIGSERIAL PRIMARY KEY,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT NOT NULL,
  company     TEXT,
  service     TEXT,
  budget      TEXT,
  timeline    TEXT,
  message     TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'new'
                CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'spam'))
);

-- 2. ENABLE ROW LEVEL SECURITY
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. ANONYMOUS users can INSERT (contact form — no login required)
CREATE POLICY "anon_insert"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 4. Only AUTHENTICATED users (your team) can read / manage leads
CREATE POLICY "auth_select"
  ON public.leads FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "auth_update"
  ON public.leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete"
  ON public.leads FOR DELETE
  TO authenticated USING (true);

-- 5. INDEXES
CREATE INDEX IF NOT EXISTS leads_created_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx  ON public.leads (status);
CREATE INDEX IF NOT EXISTS leads_email_idx   ON public.leads (email);

-- ═══════════════════════════════════════════════
-- AFTER RUNNING:
-- Open src/pages/Contact.jsx and replace:
--   SUPABASE_URL      → Settings → API → Project URL
--   SUPABASE_ANON_KEY → Settings → API → anon public key
-- ═══════════════════════════════════════════════
