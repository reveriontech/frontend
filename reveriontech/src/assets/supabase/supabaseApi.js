import axios from 'axios'

const supabaseApi = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5173/',
	headers: {
		'Content-Type': 'application/json'
		
	},
	withCredentials: true
})
  
export default supabaseApi