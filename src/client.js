import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gdxppnqinafvspiuvsyj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkeHBwbnFpbmFmdnNwaXV2c3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTQyNTIsImV4cCI6MjA4MDk3MDI1Mn0.Y7UlUu3xBZ6j2hipvgBX5Mj4OKnq60JNgW_-IUkEVws'
export const supabase = createClient(supabaseUrl, supabaseKey)