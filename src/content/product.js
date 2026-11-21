// What the app does, in words. Used by the Home and About MoC pages.
import {
  FaComments,
  FaPhoneAlt,
  FaUsers,
  FaLock,
  FaClipboardCheck,
  FaStore,
} from 'react-icons/fa';
import { LIMITS } from './features';

export const SHOP_STEPS = [
  ['Create your price list', 'Add the items you sell, with the quantity and price for each.'],
  ['Share it with your customers', 'Pick customers from your contacts. They see your list in the app.'],
  ['Receive orders in chat', 'Each order arrives as a clear list of items and quantities, ready to pack.'],
];

export const CUSTOMER_STEPS = [
  ["Open your shop's list", 'See what the shop sells and what each item costs before you order.'],
  ['Choose items and quantities', 'Tick what you need and set how much of each.'],
  ['Send the order', 'The shop gets it straight away. Pick it up, or arrange delivery with the shop.'],
];

// The short version shown on the Home and About MoC pages. The full version is the
// Features & Premium page (src/content/features.js).
export const FEATURES = [
  {
    icon: FaComments,
    title: 'Messaging',
    text: 'Chat with friends, family and shops. Send photos, videos, voice notes, files and your location.',
  },
  {
    icon: FaPhoneAlt,
    title: 'Voice and video calls',
    text: `Call anyone you chat with, one-to-one or in groups of up to ${LIMITS.groupCallMaxMembers}.`,
  },
  {
    icon: FaUsers,
    title: 'Groups',
    text: `Groups of up to ${LIMITS.groupMaxMembers} people, with admins who manage the name and the members.`,
  },
  {
    icon: FaLock,
    title: 'Security',
    text: 'End-to-end encrypted messages, in one-to-one chats and in groups, so you can talk privately with your loved ones. Block or report anyone.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Checklists',
    text: 'Shared lists for groceries, trips and chores. Not encrypted, so keep private details out of them.',
  },
  {
    icon: FaStore,
    title: 'Premium for shops',
    text: 'Shop owners share a price list with a picture; customers order by item and quantity; the shop packs the order and sends back a slip.',
  },
];

export const TEAM = [
  {
    name: 'Harika Gurazala',
    role: 'Founder / Managing Director',
    about: 'Leads product vision and operations for MOC Connect.',
    linkedIn: 'https://www.linkedin.com/in/harika-gurazala-425546186/',
  },
  {
    name: 'Srinivas Gurazala',
    role: 'Founder / Director',
    about: 'Full stack developer leading architecture for MOC Connect.',
    linkedIn: 'https://www.linkedin.com/in/srinivas-gurazala-a30094212/',
  },
  {
    name: 'Pavan Kasiboina',
    role: 'DevOps Engineer',
    about: "Supports MOC Connect's GCP, Kubernetes and CI/CD infrastructure.",
    linkedIn: 'https://www.linkedin.com/in/pavan-kasiboina-91aab5391/',
  },
];
