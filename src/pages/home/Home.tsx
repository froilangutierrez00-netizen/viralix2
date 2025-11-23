import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import ComboCard from '../../components/ComboCard/combocard';
import Testimonials from '../../components/Testimonials/Testimonials';
import styles from './Home.module.css';
import combosConfig from '../../config/combos.json';

const combos = combosConfig.combos.map(combo => ({
  ...combo,
  featureIndices: combo.keyFeatures,
  features: combo.keyFeatures.map(i => combosConfig.allFeatures[i])
}));

export default function Home() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <main className="container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: "#00aaff" },
            move: { enable: true, speed: 0.5 },
            number: { value: 50 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      <section className={styles.hero}>
        <h2 className={styles.title}>Potenciamos tu restaurante al siguiente nivel</h2>
        <p className={styles.subtitle}>Marketing digital y asesoría comercial especializada en el sector gastronómico.</p>
      </section>

      <div className={styles.plansHeader}>
        <span className={styles.plansSubtitle}>PLANES</span>
        <h2 className={styles.plansTitle}>Nuestros Planes</h2>
      </div>

      <section className={styles.combosContainer}>
        {combos.map(c => <ComboCard key={c.id} combo={c} />)}
      </section>

      <Testimonials />
    </main>
  );
}