// Test Supabase Connection
// Run this in your browser console to test if Supabase is connected

import { supabase } from './src/lib/supabase.js';

// Test connection
async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count(*)')
      .limit(1);
    
    if (error) {
      console.error('Supabase connection error:', error);
      console.log('Make sure the contact_submissions table exists in your database');
    } else {
      console.log('✅ Supabase connection successful!', data);
    }
  } catch (err) {
    console.error('Connection test failed:', err);
  }
}

testSupabaseConnection();
