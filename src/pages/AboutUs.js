import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Layout';
import { COMPANY } from '../content/company';
import { TEAM } from '../content/product';
import userImage from '../components/Images/User_img.jpeg';
import dpiitCertificate from '../components/Images/DPIIT_Certificate.png';

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="About us"
        intro={`${COMPANY.legalName} builds ${COMPANY.appName}, a communication app with local commerce built in, for friends, family, neighbourhood shops and the people who buy from them.`}
      />

      <section className="mc-section">
        <div className="container mc-narrow">
          <h2>What we are building, and why</h2>
          <p>
            We started with grocery orders because that is where a clear list and a quick conversation save the most
            time, for the shop owner and for the customer. Small shops in Tier 2 and Tier 3 cities run on trust and
            familiarity, and we want to make their daily ordering easier without changing how they do business.
          </p>
          <p>
            We keep it simple and personal. Customers keep buying from the shop they already trust, and shop owners keep
            their own relationships, prices and delivery arrangements. You can read more on the{' '}
            <Link to="/company/about-moc">About {COMPANY.appName}</Link> page.
          </p>
        </div>
      </section>

      <section className="mc-section mc-tint">
        <div className="container">
          <h2 className="mc-center">Our team</h2>
          <div className="row g-4 mt-1 justify-content-center">
            {TEAM.map(person => (
              <div className="col-md-4" key={person.name}>
                <div className="mc-card mc-person h-100">
                  <img src={userImage} alt="" />
                  <h3 className="mc-card-title">{person.name}</h3>
                  <p className="mc-role">{person.role}</p>
                  <p>{person.about}</p>
                  <a href={person.linkedIn} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin aria-hidden="true" /> LinkedIn profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mc-section">
        <div className="container mc-narrow mc-center">
          <h2>Recognition</h2>
          <p>Recognised by DPIIT, Government of India, under Startup India (DPIIT No: {COMPANY.dpiit}).</p>
          <img
            src={dpiitCertificate}
            alt={`DPIIT certificate of recognition for ${COMPANY.legalName}`}
            className="mc-certificate"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mc-section mc-tint">
        <div className="container mc-narrow">
          <h2>Company details</h2>
          <dl className="mc-details">
            <dt>Registered name</dt>
            <dd>{COMPANY.legalName}</dd>
            <dt>CIN</dt>
            <dd>{COMPANY.cin}</dd>
            <dt>Registered office</dt>
            <dd>{COMPANY.address}</dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
}
