// Facts about the company and the app, used across every page.
// Change a value here and every page that mentions it updates.

export const COMPANY = {
  appName: 'Mocc',
  shortName: 'MOC Connect',
  legalName: 'MOC Connect Private Limited',
  email: 'info@mocconnect.in',
  linkedIn: 'https://www.linkedin.com/company/moc-connect-pvt-ltd/',
  cin: 'U62090AP2025PTC120137',
  address: '1-1-1/12/A/B, 3rd line, Mittabazar, Barampet, Narasaraopet, Andhra Pradesh, India - 522601',
  dpiit: 'DIPP226285',
};

// Shown on the legal pages.
export const LEGAL = {
  // While true, every legal page carries a notice that it is a draft awaiting review.
  // Set to false once the documents have been reviewed and approved.
  isDraft: false,
  lastUpdated: '26 November 2026',
  minimumAge: 18,
  governingCourts: 'Andhra Pradesh, India',
};

// Commitments made on the support pages. Confirm each one before publishing.
export const SUPPORT = {
  // Working days within which a support email is answered.
  replyWithinDays: 2,
  // Days within which an account deletion request is completed.
  deletionWithinDays: 30,
  // Grievance Officer required under the Information Technology Rules, 2021.
  grievanceOfficer: {
    name: 'Srinivas Gurazala',
    designation: 'Grievance Officer',
    email: 'info@mocconnect.in',
    hours: 'Monday to Friday, 10:00 am to 6:00 pm IST',
  },
  // Set by the IT Rules, 2021: acknowledge within 24 hours, resolve within 15 days.
  grievanceAcknowledgeHours: 24,
  grievanceResolveDays: 15,
};
