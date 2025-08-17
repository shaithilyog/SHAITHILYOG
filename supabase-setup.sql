-- Supabase Database Setup for ShaithilYog Platform
-- Run these commands in your Supabase SQL Editor

-- 1. Create contact_submissions table (for Contact form submissions)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  type VARCHAR(50) DEFAULT 'contact',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security for contact_submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts for contact_submissions
CREATE POLICY "Allow anonymous contact inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- 2. Create form table (for Join the Future submissions)
CREATE TABLE IF NOT EXISTS form (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  profession VARCHAR(255),
  interest TEXT,
  newsletter BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security for form table
ALTER TABLE form ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts for form table
CREATE POLICY "Allow anonymous form inserts" ON form
  FOR INSERT WITH CHECK (true);

-- 3. Create beta_signups table (for beta testing volunteers)
CREATE TABLE IF NOT EXISTS beta_signups (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  product VARCHAR(100) NOT NULL DEFAULT 'logx',
  signed_up_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending'
);

-- Enable Row Level Security for beta_signups
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts for beta_signups
CREATE POLICY "Allow anonymous beta signups" ON beta_signups
  FOR INSERT WITH CHECK (true);

-- 4. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_form_email ON form(email);
CREATE INDEX IF NOT EXISTS idx_form_created_at ON form(created_at);
CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON beta_signups(email);
CREATE INDEX IF NOT EXISTS idx_beta_signups_product ON beta_signups(product);
CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at ON beta_signups(signed_up_at);

-- 5. Optional: Create a view to see all submissions
CREATE OR REPLACE VIEW all_submissions AS
SELECT 
  'contact' as form_type,
  id,
  name,
  email,
  subject as title,
  message as content,
  created_at
FROM contact_submissions
UNION ALL
SELECT 
  'join_future' as form_type,
  id,
  name,
  email,
  profession as title,
  interest as content,
  created_at
FROM form
ORDER BY created_at DESC;
