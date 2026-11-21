import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '../components/Layout';
import { COMPANY, LEGAL } from '../content/company';
import { LEGAL_DOCS } from '../content/legal';
import NotFound from './NotFound';

const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Shows one legal document: a contents list, then each numbered section. */
export default function LegalPage() {
  const { doc: key } = useParams();
  const doc = LEGAL_DOCS[key];
  if (!doc) return <NotFound />;

  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} intro={doc.summary} />
      <section className="mc-section">
        <div className="container mc-narrow mc-doc">
          {LEGAL.isDraft && (
            <p className="mc-notice" role="note">
              <strong>Draft.</strong> This document is awaiting legal review and is not yet in force.
            </p>
          )}
          <p className="mc-updated">Last updated: {LEGAL.lastUpdated}</p>

          <nav className="mc-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {doc.sections.map(section => (
                <li key={section.h}>
                  <a href={`#${slug(section.h)}`}>{section.h}</a>
                </li>
              ))}
            </ol>
          </nav>

          {doc.sections.map((section, i) => (
            <section key={section.h} id={slug(section.h)} className="mc-doc-section">
              <h2>
                {i + 1}. {section.h}
              </h2>
              {section.items.map((item, j) =>
                Array.isArray(item) ? (
                  <ul key={j}>
                    {item.map((line, k) => (
                      <li key={k}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={j}>{item}</p>
                ),
              )}
            </section>
          ))}

          <section className="mc-doc-section">
            <h2>Questions</h2>
            <p>
              Write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, or see{' '}
              <Link to="/support/contact-us">Contact Us</Link>.
            </p>
            {doc.related && (
              <p className="mc-related">
                Related:{' '}
                {doc.related.map(([to, label], i) => (
                  <span key={to}>
                    {i > 0 && ' · '}
                    <Link to={to}>{label}</Link>
                  </span>
                ))}
              </p>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
