import axios from 'axios';
import env from '../config/enviroments/env';

const api = axios.create({
  baseURL: env.apiUrl, // backend .NET
  headers: { 'Content-Type': 'application/json' }
});

export async function createCheckout(planId: string) {
  const res = await api.post('/checkout', { planId });
  return res.data; // espera { checkoutUrl } o { sessionId }
}

export default api;