import { privacyPolicy, termsAndConditions } from './privacyAndTerms';
import {
  communityGuidelines,
  customerAgreement,
  deliveryPolicy,
  refundAndCancellation,
  shopOwnerAgreement,
} from './agreementsAndPolicies';

// The address of each legal page, and the document shown there.
export const LEGAL_DOCS = {
  'privacy-policy': privacyPolicy,
  'terms-and-conditions': termsAndConditions,
  'customer-agreement': customerAgreement,
  'shop-owner-agreement': shopOwnerAgreement,
  'refund-and-cancellation': refundAndCancellation,
  'delivery-policy': deliveryPolicy,
  'community-guidelines': communityGuidelines,
};
