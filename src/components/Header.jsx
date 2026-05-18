import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { navLinks, WHATSAPP_URL } from '../constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = useCallback(() => {
    const current = window.scrollY;
    setHidden(current > lastScroll && current > 80);
    setLastScroll(current);
  }, [lastScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`header ${hidden ? 'header--hidden' : ''}`}>
        <div className="header__inner">
          <a href="#" className="header__logo" onClick={close}>
            <Logo size={40} />
          </a>

          <button
            className={`header__toggle ${open ? 'header__toggle--open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>

          <nav className={`header__nav ${open ? 'header__nav--open' : ''}`} role="navigation" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="header__link" onClick={close}>
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
              onClick={close}
            >
              Começar Agora
            </a>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`header__overlay ${open ? 'header__overlay--visible' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}
