import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import AboutMoc from './pages/AboutMoc';
import AboutUs from './pages/AboutUs';
import LegalPage from './pages/LegalPage';
import { ContactUs, DeleteAccount, Grievance, Help } from './pages/Support';
import NotFound from './pages/NotFound';

// The addresses here match the menus in src/content/sitemap.js.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          {/* There was briefly one combined page; send its address to the Terms page. */}
          <Route path="/legal/terms-and-privacy" element={<Navigate to="/legal/terms-and-conditions" replace />} />
          <Route path="/legal/:doc" element={<LegalPage />} />
          <Route path="/support/contact-us" element={<ContactUs />} />
          <Route path="/support/help" element={<Help />} />
          <Route path="/support/delete-my-account" element={<DeleteAccount />} />
          <Route path="/support/grievance-redressal" element={<Grievance />} />
          <Route path="/company/about-moc" element={<AboutMoc />} />
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
