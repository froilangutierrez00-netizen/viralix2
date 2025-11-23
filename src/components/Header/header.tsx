import { useNotification } from '../Notification/notification';
import { LogIn, User, LogOut } from 'lucide-react';
import styles from './header.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const notify = useNotification();
  const { user, login, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  async function handleLoginClick() {
    await login();
    notify('¡Bienvenido!');
  }

  function handleLogout() {
    logout();
    setDropdownOpen(false);
    notify('Sesión cerrada exitosamente');
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <span className={styles.brandText}>Viralix</span>
      </div>

      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>Nosotros</a>
        <a href="#" className={styles.navLink}>Contacto</a>
      </nav>

      {user ? (
        <div className={styles.userMenuContainer} ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className={styles.searchButton}
          >
            <User size={14} />
            <span>{user.name}</span>
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>
                <User size={16} />
                <div className={styles.dropdownUserInfo}>
                  <span className={styles.dropdownUserName}>{user.name}</span>
                  <span className={styles.dropdownUserEmail}>{user.email}</span>
                </div>
              </div>
              <div className={styles.dropdownDivider}></div>
              <button
                onClick={handleLogout}
                className={styles.dropdownButton}
              >
                <LogOut size={16} />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleLoginClick}
          className={styles.searchButton}
        >
          <LogIn size={14} />
          <span>Iniciar Sesión</span>
        </button>
      )}
    </header>
  );
}