import React, { createContext, useContext, useState, useCallback } from 'react';
import styles from './notification.module.css';

type NotifyType = 'info' | 'success' | 'error';
type NotifyFn = (message: string, type?: NotifyType) => void;
type Notification = { id: number; message: string; type: NotifyType; hiding?: boolean };

const NotificationContext = createContext<NotifyFn | null>(null);

export const useNotification = (): NotifyFn => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider');
  return ctx;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Notification[]>([]);

  const notify = useCallback((message: string, type: NotifyType = 'info') => {
    const id = Date.now() + Math.round(Math.random() * 1000);
    const n: Notification = { id, message, type };
    setNotes((s) => [n, ...s]);


    setTimeout(() => {
      setNotes((s) => s.map(x => (x.id === id ? { ...x, hiding: true } : x)));
      setTimeout(() => setNotes((s) => s.filter(x => x.id !== id)), 300);
    }, 3000);
  }, []);

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      <div className={styles.container} aria-live="polite">
        {notes.map((n) => (
          <div
            key={n.id}
            className={`${styles.notification} ${styles['notification-' + n.type]} ${n.hiding ? styles.hide : ''}`}
            style={{ top: `${20 + (notes.findIndex(x => x.id === n.id) * 70)}px` }}
          >
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};