import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Layout';
import { COMPANY, SUPPORT } from '../content/company';
import { DELETION, HELP_TOPICS } from '../content/support';

const Mail = ({ subject }) => (
  <a href={`mailto:${COMPANY.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`}>{COMPANY.email}</a>
);

export function ContactUs() {
  return (
    <>
      <PageHeader
        eyebrow="User Support"
        title="Contact us"
        intro="Run a shop and want to try the app, or have a question? We would love to hear from you."
      />
      <section className="mc-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mc-card h-100">
                <FaEnvelope className="mc-icon" aria-hidden="true" />
                <h2 className="mc-card-title">Email</h2>
                <p>
                  <Mail />
                </p>
                <p className="mc-note">We reply within {SUPPORT.replyWithinDays} working days.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mc-card h-100">
                <FaLinkedin className="mc-icon" aria-hidden="true" />
                <h2 className="mc-card-title">LinkedIn</h2>
                <p>
                  <a href={COMPANY.linkedIn} target="_blank" rel="noopener noreferrer">
                    {COMPANY.legalName}
                  </a>
                </p>
                <p className="mc-note">News and updates from the company.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mc-card h-100">
                <FaMapMarkerAlt className="mc-icon" aria-hidden="true" />
                <h2 className="mc-card-title">Registered office</h2>
                <p>{COMPANY.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mc-section mc-tint">
        <div className="container mc-narrow">
          <h2>Before you write</h2>
          <ul className="mc-list">
            <li>
              For how-to questions, see <Link to="/support/help">Help &amp; Support</Link>.
            </li>
            <li>
              To delete your account, see <Link to="/support/delete-my-account">Delete My Account</Link>.
            </li>
            <li>
              To make a formal complaint, see <Link to="/support/grievance-redressal">Grievance Redressal</Link>.
            </li>
            <li>
              For a problem with an order, contact the shop first. If that does not resolve it, write to us with the
              shop's name and number.
            </li>
          </ul>
          <p>When you write about your account, include your registered mobile number so we can find it.</p>
        </div>
      </section>
    </>
  );
}

export function Help() {
  return (
    <>
      <PageHeader eyebrow="User Support" title="Help & Support" intro="Answers to the questions we hear most often." />
      <section className="mc-section">
        <div className="container mc-narrow">
          {HELP_TOPICS.map(topic => (
            <section key={topic.title} className="mc-faq-topic">
              <h2>{topic.title}</h2>
              {topic.questions.map(item => (
                <details key={item.q} className="mc-faq">
                  <summary>{item.q}</summary>
                  {item.a.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </details>
              ))}
            </section>
          ))}
          <div className="mc-card mc-callout">
            <h2 className="mc-card-title">Still stuck?</h2>
            <p>
              Write to <Mail /> with your registered mobile number and what happened. We reply within{' '}
              {SUPPORT.replyWithinDays} working days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function DeleteAccount() {
  return (
    <>
      <PageHeader
        eyebrow="User Support"
        title="Delete my account"
        intro={`How to delete your ${COMPANY.appName} account and the information linked to it.`}
      />
      <section className="mc-section">
        <div className="container mc-narrow">
          <h2>Delete it in the app</h2>
          <ol className="mc-steps">
            {DELETION.inApp.map((step, i) => (
              <li key={i}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mc-note">
            Deleting in the app also cancels a Premium subscription, so you are not charged again.
          </p>
          <h2 className="mt-5">If you cannot use the app</h2>
          <ol className="mc-steps">
            {DELETION.steps.map((step, i) => (
              <li key={i}>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            <a className="mc-btn mc-btn-primary" href={`mailto:${COMPANY.email}?subject=${encodeURIComponent('Delete my account')}`}>
              Email a deletion request
            </a>
          </p>
          <p className="mc-note">
            You do not need to have the app installed to make this request. If you subscribed to Premium and are
            asking by email, cancel the subscription first so you are not charged again; see the{' '}
            <Link to="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</Link>.
          </p>
        </div>
      </section>
      <section className="mc-section mc-tint">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="mc-card h-100">
                <h2 className="mc-card-title">What is deleted</h2>
                <ul className="mc-list">
                  {DELETION.deleted.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mc-card h-100">
                <h2 className="mc-card-title">What is kept</h2>
                <ul className="mc-list">
                  {DELETION.kept.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mc-center mt-4">
            Deletion cannot be undone. To use the app again you would create a new account. More detail is in the{' '}
            <Link to="/legal/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

export function Grievance() {
  const officer = SUPPORT.grievanceOfficer;
  return (
    <>
      <PageHeader
        eyebrow="User Support"
        title="Grievance redressal"
        intro="How to make a formal complaint, who handles it, and how quickly."
      />
      <section className="mc-section">
        <div className="container mc-narrow">
          <h2>What you can raise</h2>
          <ul className="mc-list">
            <li>Content or behaviour on the app that breaks the law or our Community Guidelines.</li>
            <li>Misuse of your personal information, or a concern about your privacy.</li>
            <li>A problem with your account or a Premium payment that support has not resolved.</li>
            <li>A shop or user acting dishonestly or abusively.</li>
          </ul>

          <h2>Grievance Officer</h2>
          <p>
            As required by the Information Technology Act, 2000 and the rules made under it, {COMPANY.legalName} has
            appointed a Grievance Officer.
          </p>
          <dl className="mc-details">
            <dt>Name</dt>
            <dd>{officer.name}</dd>
            <dt>Designation</dt>
            <dd>{officer.designation}</dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${officer.email}?subject=${encodeURIComponent('Grievance')}`}>{officer.email}</a>
            </dd>
            <dt>Address</dt>
            <dd>{COMPANY.address}</dd>
            <dt>Hours</dt>
            <dd>{officer.hours}</dd>
          </dl>

          <h2>What to include</h2>
          <ul className="mc-list">
            <li>Your name and registered mobile number.</li>
            <li>What happened, and when.</li>
            <li>The number or name of the user or shop involved, if any.</li>
            <li>
              Screenshots or other evidence. Chat messages are encrypted, so we cannot read them ourselves unless you
              send them to us.
            </li>
          </ul>

          <h2>What happens next</h2>
          <ol className="mc-steps">
            <li>
              <strong>Acknowledgement</strong>
              <span>We acknowledge your complaint within {SUPPORT.grievanceAcknowledgeHours} hours.</span>
            </li>
            <li>
              <strong>Review</strong>
              <span>The Grievance Officer looks into it and may ask you for more information.</span>
            </li>
            <li>
              <strong>Resolution</strong>
              <span>
                We resolve the complaint and tell you the outcome within {SUPPORT.grievanceResolveDays} days of
                receiving it.
              </span>
            </li>
          </ol>

          <h2>If you are not satisfied</h2>
          <p>
            If you disagree with the outcome, or do not hear from us in time, you may appeal to the Grievance Appellate
            Committee set up by the Government of India, or approach the appropriate consumer forum or court.
          </p>
          <p className="mc-related">
            Related: <Link to="/legal/community-guidelines">Community Guidelines</Link> ·{' '}
            <Link to="/legal/privacy-policy">Privacy Policy</Link> · <Link to="/support/contact-us">Contact Us</Link>
          </p>
        </div>
      </section>
    </>
  );
}
