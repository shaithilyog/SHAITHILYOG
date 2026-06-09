import { createClient } from '@supabase/supabase-js';

// Shaithilyog Labs shares the kavach Supabase project (one backend for the
// org). The publishable key is browser-safe by design — RLS is the guard.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://wxwwrlegkqcmcsbgolrn.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_il2czNsNrzGK3f2-3mXOKw_l57XknoT';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabaseUrl, supabaseAnonKey };
