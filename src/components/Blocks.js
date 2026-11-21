import React from 'react';
import { FaStore, FaUser } from 'react-icons/fa';
import { CUSTOMER_STEPS, FEATURES, SHOP_STEPS } from '../content/product';

// Building blocks shared by more than one page.

function Steps({ icon: Icon, title, note, steps }) {
  return (
    <div className="col-md-6">
      <div className="mc-card h-100">
        <h3 className="mc-card-title">
          <Icon aria-hidden="true" /> {title}
        </h3>
        {note && <p className="mc-note">{note}</p>}
        <ol className="mc-steps">
          {steps.map(([heading, text]) => (
            <li key={heading}>
              <strong>{heading}</strong>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/** "For shop owners" and "For customers", side by side. */
export function HowItWorks() {
  return (
    <div className="row g-4 mt-1">
      <Steps
        icon={FaStore}
        title="For shop owners"
        note="Creating and sharing lists is a Premium feature for shop owners."
        steps={SHOP_STEPS}
      />
      <Steps icon={FaUser} title="For customers" steps={CUSTOMER_STEPS} />
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="row g-4 mt-1">
      {FEATURES.map(({ icon: Icon, title, text }) => (
        <div className="col-md-6 col-lg-4" key={title}>
          <div className="mc-card h-100">
            <Icon className="mc-icon" aria-hidden="true" />
            <h3 className="mc-card-title">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** A screenshot of the app in a phone-shaped frame. */
export function Phone({ src, alt, caption }) {
  return (
    <figure className="mc-phone">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
