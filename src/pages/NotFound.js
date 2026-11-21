import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Layout';

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="That address does not match a page on this site." />
      <section className="mc-section">
        <div className="container mc-narrow mc-center">
          <Link className="mc-btn mc-btn-primary" to="/">
            Go to the home page
          </Link>
        </div>
      </section>
    </>
  );
}
