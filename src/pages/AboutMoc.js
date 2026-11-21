import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureGrid, HowItWorks, Phone } from '../components/Blocks';
import { PageHeader } from '../components/Layout';
import { COMPANY } from '../content/company';
import appLists from '../components/Images/app-lists.png';
import appListItems from '../components/Images/app-list-items.png';

export default function AboutMoc() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={`About ${COMPANY.appName}`}
        intro={`${COMPANY.appName} is a communication app for friends, family and groups, with local commerce built in for neighbourhood shops and their customers.`}
      />

      <section className="mc-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h2>The problem</h2>
              <p>
                Many supermarkets and kirana stores in Tier 2 and Tier 3 cities in India still take daily orders through
                phone calls and scattered messages. Items get missed, prices are unclear, and both the shop owner and
                the customer lose time.
              </p>
            </div>
            <div className="col-md-6">
              <h2>What {COMPANY.appName} does</h2>
              <p>
                First, it is a place to talk: messages, voice and video calls, and groups with the people you know.
                For shopping, it puts the shop's list, the customer's order and the conversation in one place. The shop owner sees
                exactly what was ordered. The customer sees the price before ordering. Payment and pickup or delivery
                stay between the shop and the customer, the way they already work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-section mc-tint">
        <div className="container">
          <h2 className="mc-center">How it works</h2>
          <HowItWorks />
        </div>
      </section>

      <section className="mc-section">
        <div className="container">
          <h2 className="mc-center">Who it is for</h2>
          <div className="row g-4 mt-1">
            <div className="col-md-6">
              <div className="mc-card h-100">
                <h3 className="mc-card-title">Shop owners</h3>
                <p>
                  Local grocery shops, supermarkets and kirana stores that want a simple way to share prices and receive
                  clear orders, without building a website or joining a delivery marketplace.
                </p>
                <p>
                  Shop owners subscribe to Premium to create and share lists. See the{' '}
                  <Link to="/legal/shop-owner-agreement">Shop Owner Agreement</Link> and the{' '}
                  <Link to="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</Link>.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mc-card h-100">
                <h3 className="mc-card-title">Customers</h3>
                <p>
                  People who buy from a shop they already know and would rather send a clear list, see prices in
                  advance, and collect packed items without waiting.
                </p>
                <p>
                  {COMPANY.appName} does not sell or deliver goods itself. See the{' '}
                  <Link to="/legal/customer-agreement">Customer Agreement</Link> and the{' '}
                  <Link to="/legal/delivery-policy">Delivery Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mc-section mc-tint">
        <div className="container">
          <h2 className="mc-center">What's in the app</h2>
          <FeatureGrid />
          <p className="mc-center mt-4">
            <Link className="mc-btn mc-btn-primary" to="/features">
              Features &amp; Premium in detail
            </Link>
          </p>
        </div>
      </section>

      <section className="mc-section">
        <div className="container">
          <h2 className="mc-center">A look at the app</h2>
          <p className="mc-center mc-sub">Screens from the app, shown with sample data.</p>
          <div className="mc-screens">
            <Phone src={appLists} alt="The shop owner's lists in the app" caption="A shop owner's lists" />
            <Phone
              src={appListItems}
              alt="One list opened, showing items with quantity and price"
              caption="Items with quantity and price"
            />
          </div>
        </div>
      </section>
    </>
  );
}
