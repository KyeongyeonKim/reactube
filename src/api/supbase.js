import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABSE_KEY;
// ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkanB4dHpzeXRxaXVkdHN5em5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NTg3MTUsImV4cCI6MjAyNDIzNDcxNX0.nN3rE1r2CIcakIn5NW7qpPcxe7f9inxph50-DjzzZI8');

const client = createClient(supabaseUrl, supabaseAnonKey);
export default client;
