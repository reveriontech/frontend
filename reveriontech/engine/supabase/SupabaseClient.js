import { createClient } from "@supabase/supabase-js"
import dotenv from 'dotenv'

dotenv.config({ path: "./engine/.env" })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase