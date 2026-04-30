import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const NAV: [string, string][] = [
  ['Expertise', 'expertise'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

type Mode = 'dark' | 'light';

interface NavigationProps {
  mode: Mode;
  onToggleMode: () => void;
}

export function Navigation({ mode, onToggleMode }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <header
        id="navigation"
        className={`yuji-nav${scrolled ? ' scrolled' : ''}`}
        style={{ justifyContent: 'space-between' }}
      >
        <div className="yuji-nav-toggle" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button
            type="button"
            className="yuji-icon-btn yuji-menu-btn"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button type="button" className="yuji-icon-btn" onClick={onToggleMode} aria-label="Toggle theme">
            <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} />
          </button>
        </div>
        <nav className="yuji-nav-links" aria-label="Primary">
          {NAV.map(([label, id]) => (
            <button key={id} type="button" onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>
      </header>

      {open && (
        <>
          <div
            className="yuji-drawer-overlay"
            role="presentation"
            onClick={() => setOpen(false)}
          />
          <div className="yuji-drawer">
            <p style={{ fontWeight: 700, marginBottom: 8 }}>Menu</p>
            {NAV.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
