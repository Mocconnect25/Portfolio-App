import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaCrown, FaMinus, FaShieldAlt } from 'react-icons/fa';
import { COMPANY } from '../content/company';
import { COMPARE, FEATURES, PREMIUM, PREMIUM_NOTES } from '../content/features';
import '../components/features.css';

const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function FeatureCard({ icon: Icon, title, summary, points, caveat, wide, premium }) {
  return (
    <div className={wide ? 'col-12' : 'col-lg-6'} id={slug(title)}>
      <article className={premium ? 'mf-card mf-card-premium h-100' : 'mf-card h-100'}>
        <div className="mf-card-head">
          <span className={premium ? 'mf-tile mf-tile-gold' : 'mf-tile'} aria-hidden="true">
            <Icon />
          </span>
          <div>
            <h3>{title}</h3>
            <p className="mf-summary">{summary}</p>
          </div>
        </div>
        <ul className="mf-points">
          {points.map(point => (
            <li key={point}>
              <FaCheck aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {caveat && (
          <p className="mf-caveat">
            <strong>Please note:</strong> {caveat}
          </p>
        )}
      </article>
    </div>
  );
}

function Mark({ value }) {
  if (value === true) {
    return (
      <span className="mf-yes">
        <FaCheck aria-hidden="true" />
        <span className="visually-hidden">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="mf-no">
        <FaMinus aria-hidden="true" />
        <span className="visually-hidden">Not included</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function Features() {
  useEffect(() => {
    document.title = 'Features & Premium | ' + COMPANY.shortName;
  }, []);

  const jumpLinks = [...FEATURES, ...PREMIUM].map(({ title }) => title);

  return (
    <div className="mf">
      {/* Hero */}
      <section className="mf-hero">
        <div className="mf-orb mf-orb-a" aria-hidden="true" />
        <div className="mf-orb mf-orb-b" aria-hidden="true" />
        <div className="container mf-hero-inner">
          <p className="mf-pill">
            <FaShieldAlt aria-hidden="true" /> Features &amp; Premium
          </p>
          <h1>
            Everything in one app.
            <br />
            <span className="mf-grad">Free to start.</span>
          </h1>
          <p className="mf-lead">
            Call, message and make groups with the people you know. Keep shared checklists. Go Premium when you run a
            shop and want to take orders.
          </p>
          <ul className="mf-jump" aria-label="Jump to a feature">
            {jumpLinks.map(title => (
              <li key={title}>
                <a href={`#${slug(title)}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Free features */}
      <section className="mc-section">
        <div className="container">
          <p className="mf-kicker">For everyone</p>
          <h2 className="mc-center mf-title">Talk, share and stay close</h2>
          <p className="mc-center mc-sub">
            Everything below is free. No shop or subscription needed.
          </p>
          <div className="row g-4 mt-1">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} wide={i === FEATURES.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Normal and Premium side by side */}
      <section className="mc-section mc-tint">
        <div className="container mf-compare-wrap">
          <p className="mf-kicker">Plans</p>
          <h2 className="mc-center mf-title">Normal and Premium</h2>
          <p className="mc-center mc-sub">Every account starts as Normal. Premium is for shop owners.</p>
          <div className="mf-table-scroll">
            <table className="mf-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Feature</span>
                  </th>
                  <th scope="col">Normal</th>
                  <th scope="col" className="mf-th-premium">
                    <FaCrown aria-hidden="true" /> Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([label, normal, premium]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>
                      <Mark value={normal} />
                    </td>
                    <td className="mf-td-premium">
                      <Mark value={premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="mf-premium">
        <div className="mf-premium-glow" aria-hidden="true" />
        <div className="container">
          <p className="mf-kicker mf-kicker-gold">
            <FaCrown aria-hidden="true" /> Premium
          </p>
          <h2 className="mc-center mf-title mf-title-light">Run your shop from the app</h2>
          <p className="mc-center mf-premium-sub">
            Share a price list with your customers and receive their orders in chat.
          </p>
          <div className="row g-4 mt-1">
            {PREMIUM.map(feature => (
              <FeatureCard key={feature.title} {...feature} premium />
            ))}
          </div>
          <ul className="mf-notes">
            {PREMIUM_NOTES.map(note => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="mf-actions">
            <Link className="mf-btn mf-btn-solid" to="/legal/shop-owner-agreement">
              Shop Owner Agreement <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="mf-btn mf-btn-glass" to="/legal/refund-and-cancellation">
              Refund &amp; Cancellation Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="mf-cta">
        <div className="container mc-center">
          <h2>Have a question about a feature?</h2>
          <p>Look through the help pages, or write to us.</p>
          <div className="mf-actions">
            <Link className="mf-btn mf-btn-solid" to="/support/help">
              Help &amp; Support
            </Link>
            <Link className="mf-btn mf-btn-glass" to="/support/contact-us">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
