import { createClient } from '@supabase/supabase-js';

// Supabase configuration with fallback values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oxxqpbqmccdjmhfosrvw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94eHFwYnFtY2Nkam1oZm9zcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMTk0ODksImV4cCI6MjA3MDg5NTQ4OX0.zOSUMqDEoZU95O9OiMKtOu11vQ-3tpYyFD_ON3lGa5U';

// Debug: Log the configuration (remove in production)
console.log('Supabase URL:', supabaseUrl);
console.log('Environment variables loaded:', {
  url: import.meta.env.VITE_SUPABASE_URL ? 'Found' : 'Missing',
  key: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Found' : 'Missing'
});

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export configuration for use in components
export { supabaseUrl, supabaseAnonKey };
