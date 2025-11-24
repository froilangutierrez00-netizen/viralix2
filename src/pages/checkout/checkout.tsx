import { useSearchParams } from 'react-router-dom';

export default function Checkout(){
  const [q] = useSearchParams();
  const session = q.get('session') ?? q.get('plan');
  return (
    <main className="container">
      <h2 style={{color:'var(--azul)'}}>Checkout</h2>
      <p style={{color:'#ccc'}}>Session / Plan: <strong>{session}</strong></p>
      <p style={{color:'#ccc'}}>Aquí iría la integración con pasarela (Stripe/PayPal) o la UI de confirmación.</p>
    </main>
  );
}