import { useNotification } from '../Notification/notification';
import { LogIn, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useRef, useEffect } from 'react';
import styles from './header.module.css';
import { useFeatureFlag } from 'configcat-react';

export default function Header() {
  const notify = useNotification();
  const { user, login, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ff_loginMembersValue = useFeatureFlag('ff_loginmembers', false);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleLogin = async () => {
    await login();
    notify('¡Bienvenido!');
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    notify('Sesión cerrada exitosamente');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/" className={styles.brandText}>Viralix</a>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <a href="/about" className={styles.navLink}>Nosotros</a>
        <a href="/contact" className={styles.navLink}>Contacto</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <a href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Nosotros
            </a>
            <a href="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>
          </nav>
        </div>
      )}

      {ff_loginMembersValue.value && (
        <>
          {user ? (
            <div className={styles.userMenuContainer} ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={styles.authButton}
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
                  <div className={styles.dropdownDivider} />
                  <button onClick={handleLogout} className={styles.dropdownButton}>
                    <LogOut size={16} />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleLogin} className={styles.authButton}>
              <LogIn size={14} />
              <span>Iniciar Sesión</span>
            </button>
          )}
        </>
      )}
    </header>
  );
}