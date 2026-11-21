import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { COMPANY } from '../content/company';
import { MENU, TOP_LINKS } from '../content/sitemap';
import logo from './Images/moc-logo.svg';
import './site.css';
import './home.css';
import './polish.css';

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // the whole menu, on small screens
  const [openGroup, setOpenGroup] = useState(null); // which drop-down is open
  const navRef = useRef(null);

  // Close everything after moving to another page.
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Close an open drop-down on Escape or a click elsewhere.
  useEffect(() => {
    if (!openGroup) return undefined;
    const onKey = e => e.key === 'Escape' && setOpenGroup(null);
    const onClick = e => navRef.current && !navRef.current.contains(e.target) && setOpenGroup(null);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [openGroup]);

  return (
    <header className="mc-nav">
      <div className="container mc-nav-inner">
        <Link className="mc-brand" to="/">
          <img src={logo} alt="" />
          <span>{COMPANY.shortName}</span>
        </Link>
        <button
          type="button"
          className="mc-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(open => !open)}
        >
          Menu
        </button>
        <nav id="main-nav" ref={navRef} className={menuOpen ? 'mc-links open' : 'mc-links'} aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          {TOP_LINKS.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
          {MENU.map(group => {
            const isOpen = openGroup === group.title;
            const isCurrent = group.links.some(([to]) => to === pathname);
            return (
              <div className="mc-group" key={group.title}>
                <button
                  type="button"
                  className={isCurrent ? 'mc-group-btn current' : 'mc-group-btn'}
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : group.title)}
                >
                  {group.title}
                  <span className="mc-caret" aria-hidden="true" />
                </button>
                {isOpen && (
                  <div className="mc-dropdown">
                    {group.links.map(([to, label]) => (
                      <NavLink key={to} to={to}>
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mc-footer">
      <div className="container">
        <div className="mc-footer-grid">
          <div className="mc-footer-brand">
            <Link className="mc-brand" to="/">
              <img src={logo} alt="" />
              <span>{COMPANY.shortName}</span>
            </Link>
            <p>Chat, calls and groups, with local shopping built in.</p>
            <p>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <ul>
              {TOP_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {MENU.map(group => (
            <nav key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mc-footer-legal">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName} | CIN: {COMPANY.cin}
          </p>
          <p>Registered office: {COMPANY.address}</p>
        </div>
      </div>
    </footer>
  );
}

/** The frame around every page: header, the page itself, footer. */
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Start each page at the top, or at the section named in the address.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="mc-page">
      <a className="visually-hidden-focusable" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/** The coloured band with the page title, used at the top of every page except Home. */
export function PageHeader({ eyebrow, title, intro }) {
  // Show the page name in the browser tab.
  useEffect(() => {
    document.title = title + ' | ' + COMPANY.shortName;
  }, [title]);
  return (
    <section className="mc-page-header">
      <div className="container mc-narrow">
        {eyebrow && <p className="mc-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="mc-lead">{intro}</p>}
      </div>
    </section>
  );
}
