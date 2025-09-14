import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ptjirtlfnkcjfmetqqgg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0amlydGxmbmtjamZtZXRxcWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzAwMDEsImV4cCI6MjA3MjkwNjAwMX0.DAZDGjrxEJQkIMau0sbkgBW9Vhbz0ixZKq4-4nRRbrU'


const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
