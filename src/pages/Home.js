import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaComments, FaLock, FaPhoneAlt, FaShieldAlt, FaStore, FaUser, FaUsers } from 'react-icons/fa';
import { COMPANY } from '../content/company';
import { LIMITS } from '../content/features';
import { CUSTOMER_STEPS, FEATURES, SHOP_STEPS } from '../content/product';

const HERO_BADGES = [
  [FaComments, 'Messaging'],
  [FaPhoneAlt, 'Voice & video calls'],
  [FaUsers, 'Groups'],
  [FaStore, 'Local shopping'],
];

const PRIVACY_POINTS = [
  [FaLock, 'End-to-end encrypted chats', 'Messages are locked on your phone and opened only on the phones of the people in the chat. We cannot read them.'],
  [FaUsers, 'Private groups too', 'Every group has its own secret key, replaced whenever someone joins or leaves.'],
  [FaPhoneAlt, 'Protected calls', 'Voice and video travel encrypted between phones, and calls are never recorded.'],
];

function StepList({ icon: Icon, title, note, steps }) {
  return (
    <div className="col-lg-6">
      <div className="mh-steps-card h-100">
        <div className="mh-steps-head">
          <span className="mh-icon-tile mh-icon-tile-sm" aria-hidden="true">
            <Icon />
          </span>
          <div>
            <h3>{title}</h3>
            {note && <p>{note}</p>}
          </div>
        </div>
        <ol>
          {steps.map(([heading, text], i) => (
            <li key={heading}>
              <span className="mh-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <strong>{heading}</strong>
                <span>{text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = COMPANY.shortName + ' | Chat, calls and local shopping';
  }, []);

  return (
    <div className="mh">
      {/* Hero */}
      <section className="mh-hero">
        <div className="mh-orb mh-orb-a" aria-hidden="true" />
        <div className="mh-orb mh-orb-b" aria-hidden="true" />
        <div className="mh-orb mh-orb-c" aria-hidden="true" />
        <div className="container mh-hero-inner">
          <p className="mh-pill">
            <FaShieldAlt aria-hidden="true" /> End-to-end encrypted messaging and groups
          </p>
          <h1>
            Talk privately.
            <br />
            <span className="mh-grad">Shop locally.</span>
          </h1>
          <p className="mh-lead">
            {COMPANY.appName} brings your loved ones, your groups and your neighbourhood shops into one app. Message and
            call privately, and let shops share a price list you can order from in a few taps.
          </p>
          <div className="mh-actions">
            <Link className="mh-btn mh-btn-solid" to="/features">
              Explore features <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="mh-btn mh-btn-glass" to="/company/about-moc">
              About {COMPANY.appName}
            </Link>
          </div>
          <ul className="mh-badges" aria-label="What the app does">
            {HERO_BADGES.map(([Icon, label]) => (
              <li key={label}>
                <Icon aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>
        <svg className="mh-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C240,95 480,0 720,35 C960,70 1200,95 1440,30 L1440,90 L0,90 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* Quick facts */}
      <section className="mh-facts">
        <div className="container">
          <div className="row g-3">
            {[
              ['End-to-end', 'encrypted one-to-one and group chats'],
              [`${LIMITS.groupMaxMembers}`, 'people in a group'],
              [`${LIMITS.groupCallMaxMembers}`, 'people on a group voice or video call'],
              ['Free', 'to chat, call and make groups'],
            ].map(([big, small]) => (
              <div className="col-6 col-lg-3" key={big}>
                <div className="mh-fact">
                  <strong>{big}</strong>
                  <span>{small}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mc-section">
        <div className="container">
          <p className="mh-kicker">What's in the app</p>
          <h2 className="mc-center mh-title">Everything you need to stay close</h2>
          <p className="mc-center mc-sub">
            Chat and call the people you know, make groups, keep shared checklists, and shop from the stores near you.
          </p>
          <div className="row g-4 mt-1">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div className="col-md-6 col-lg-4" key={title}>
                <article className="mh-card h-100">
                  <span className="mh-icon-tile" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
          <p className="mc-center mt-5">
            <Link className="mh-btn mh-btn-outline" to="/features">
              See all features and Premium <FaArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* Privacy band */}
      <section className="mh-privacy">
        <div className="mh-privacy-glow" aria-hidden="true" />
        <div className="container">
          <p className="mh-kicker mh-kicker-light">Private by design</p>
          <h2 className="mc-center mh-title mh-title-light">Your conversations stay yours</h2>
          <p className="mc-center mh-privacy-sub">
            Built so that what you say stays between you and your loved ones.
          </p>
          <div className="row g-4 mt-1">
            {PRIVACY_POINTS.map(([Icon, title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="mh-glass-card h-100">
                  <span className="mh-icon-tile mh-icon-tile-light" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mc-center mh-privacy-note">
            Photos, videos and files are stored on our servers behind short-lived links, and checklists are not
            end-to-end encrypted.{' '}
            <Link to="/legal/privacy-policy">Read the Privacy Policy</Link>
          </p>
        </div>
      </section>

      {/* Shopping */}
      <section className="mc-section">
        <div className="container">
          <p className="mh-kicker">Local shopping</p>
          <h2 className="mc-center mh-title">Order from the shops you trust</h2>
          <p className="mc-center mc-sub">
            Shop owners go Premium to share a price list with a picture. Customers choose items and quantities, and the
            shop packs the order and sends back a slip with the updated amount.
          </p>
          <div className="row g-4 mt-1">
            <StepList
              icon={FaStore}
              title="For shop owners"
              note="Creating and sharing price lists is a Premium feature."
              steps={SHOP_STEPS}
            />
            <StepList icon={FaUser} title="For customers" steps={CUSTOMER_STEPS} />
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="mh-cta">
        <div className="container mc-center">
          <h2>Questions? We are happy to help.</h2>
          <p>Look through the help pages, or get in touch and we will reply within a couple of working days.</p>
          <div className="mh-actions mh-actions-center">
            <Link className="mh-btn mh-btn-solid" to="/support/help">
              Help &amp; Support
            </Link>
            <Link className="mh-btn mh-btn-glass" to="/support/contact-us">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
