import React from 'react';
import type { Combo } from '../../models/index';
import { createCheckout } from '../../services/api';
import { useNotification } from '../Notification/notification';
import styles from './ComboCard.module.css';
import { useFeatureFlag } from "configcat-react";
import combosConfig from '../../config/combos.json';

type Props = {
  combo: Combo;
};

export default function ComboCard({ combo }: Props) {
  const notify = useNotification();
  const [loading, setLoading] = React.useState(false);

  const ff_subscriptionpaymentenabledValue = useFeatureFlag('ff_subscriptionpaymentenabled', false);

  async function onBuy() {
    if (ff_subscriptionpaymentenabledValue.value === false) {
      setLoading(true);
      const message = `Hola, quiero comprar el plan "${combo.title}" (id: ${combo.id}) - Precio: ${combo.price}`;
      window.open(`https://wa.me/${123}?text=${encodeURIComponent(message)}`, '_blank');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await createCheckout(combo.priceId!);
      notify('Compra creada correctamente', 'success');

      if (res.checkoutUrl) {
        window.location.href = res.checkoutUrl;
        return;
      }
      if (res.sessionId) {
        window.location.href = `/checkout?session=${encodeURIComponent(res.sessionId)}`;
        return;
      }
      window.location.href = `/checkout?plan=${encodeURIComponent(combo.id)}`;
    } catch (err) {
      notify('Error al iniciar compra', 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.ribbon}></div>
      
      <div className={styles.header}>
        <h3 className={styles.title}>{combo.title}</h3>
        <div className={styles.price}>{combo.price}</div>
        <div className={styles.priceLabel}>por mes</div>
      </div>

      <ul className={styles.features}>
        {combosConfig.allFeatures.map((feature, i) => {
          const isIncluded = combo.featureIndices.includes(i);
          return (
            <li key={i} className={`${styles.featureItem} ${!isIncluded ? styles.disabled : ''}`}>
              <span className={styles.icon}>{isIncluded ? '✓' : '✕'}</span>
              {feature}
            </li>
          );
        })}
      </ul>

      <div className={styles.footer}>
        <button
          onClick={onBuy}
          disabled={loading}
          className={`${styles.buyBtn} ${loading ? styles.disabled : ''}`}
        >
          {loading ? 'Procesando...' : (ff_subscriptionpaymentenabledValue.value ? 'Comprar' : 'Contactar')}
        </button>
      </div>
    </div>
  );
}