import './Header.module.css';
import { useNotification } from '../Notification/notification';

export default function Header() {

  const notify = useNotification();

  async function redirectToCheckout() {
    // crear una funcion que cree una sesión de pago y luego redirigir a stripe
    notify('Redirigiendo al checkout...');
  }

  return (
    <header style={{background:'#121212',padding:'1rem 2rem',borderBottom:`1px solid var(--azul)`,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',alignItems:'center',gap:50}}>
        <img src="/assets/images/logo-viralix.png" alt="Viralix" style={{height:30}}/>
      </div>
      <nav>
        <a href="/" style={{marginRight:12}}>Inicio</a>
        <button onClick={redirectToCheckout} style={{background:'var(--azul)',color:'white',padding:'8px 12px',borderRadius:8,border:'none',cursor:'pointer'}}>
          {'Iniciar Sesión'}
        </button>
      </nav>
    </header>
  );
}