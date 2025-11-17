import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // proxy en vite.config.ts -> backend .NET
  headers: { 'Content-Type': 'application/json' }
});

export async function createCheckout(planId: string) {
  const res = await api.post('/checkout', { planId });
  return res.data; // espera { checkoutUrl } o { sessionId }
}

export default api;