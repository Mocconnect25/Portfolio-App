// The Features & Premium page: what everyone gets, and what Premium adds.
// Every statement here describes something the app does today.
import {
  FaPhoneAlt,
  FaComments,
  FaUsers,
  FaShieldAlt,
  FaClipboardCheck,
  FaTags,
  FaShoppingBasket,
} from 'react-icons/fa';

// Limits that come from the app's settings. Keep them in step with the servers.
export const LIMITS = {
  normalMaxLists: 50,
  normalMaxPeoplePerList: 60,
  groupMaxMembers: 100,
  groupCallMaxMembers: 4,
};

export const FEATURES = [
  {
    icon: FaPhoneAlt,
    title: 'Calling',
    summary: 'Voice and video calls over the internet, with the people you chat with.',
    points: [
      'One-to-one voice and video calls from any chat.',
      `Group voice and video calls in groups of up to ${LIMITS.groupCallMaxMembers} people.`,
      'A call history in the app, so you can see who called and when.',
      'Works on Wi-Fi and mobile data.',
    ],
  },
  {
    icon: FaComments,
    title: 'Messaging',
    summary: 'Chat with friends, family and the shops you buy from.',
    points: [
      'Text, photos, videos, voice notes, files and your location.',
      'Reply to a message, forward it, or delete it for yourself or for everyone.',
      'Typing indicators and read receipts, so you can see when a message has been delivered and read.',
      'Messages sent while you are offline are delivered when you are back online.',
      'You choose which photos, audio, videos and documents download by themselves on mobile data, on Wi-Fi and when roaming (Settings, Storage and data).',
    ],
  },
  {
    icon: FaUsers,
    title: 'Grouping',
    summary: 'Group chats for family, friends, colleagues or your shop’s regulars.',
    points: [
      `Create a group of up to ${LIMITS.groupMaxMembers} people from your contacts. Whoever creates it is its admin.`,
      'Admins name the group, add and remove people, and make other people admins.',
      'Anyone can leave. A group is never left without an admin.',
      `Call buttons appear in groups of up to ${LIMITS.groupCallMaxMembers} people.`,
      'Group messages and group calls are end-to-end encrypted.',
    ],
  },
  {
    icon: FaShieldAlt,
    title: 'Security',
    summary: 'Built so that what you say stays between you and your loved ones.',
    points: [
      'End-to-end encrypted one-to-one messages: they are locked on your phone and can only be opened on the other person’s phone. We cannot read them.',
      'Encrypted voice and video calls: the audio and video travel encrypted between the phones (through a relay server only when a direct connection is not possible, and the relay cannot listen in). We do not record or store calls.',
      'End-to-end encrypted group messages: each group has its own secret key that only its members\u2019 phones hold. It is replaced whenever someone joins or leaves.',
      'Sign in with your phone number and a one-time code. Your account works on one phone at a time.',
      'Block anyone, and report a sender from the menu (⋮) at the top of a chat.',
      'Delete your account yourself, from inside the app.',
    ],
    caveat:
      'End-to-end encryption covers the text of one-to-one and group messages, and the set-up of group calls. Photos, videos and files you send are stored on our servers behind short-lived links, and checklists are not end-to-end encrypted.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Checklist',
    summary: 'Simple shared lists for everyday things: groceries, trips, chores.',
    points: [
      `Every account can create up to ${LIMITS.normalMaxLists} checklists and share each with up to ${LIMITS.normalMaxPeoplePerList} people.`,
      'Tick items off together; changes made offline are synced when you are back online.',
      'Pin the lists you use most.',
    ],
    caveat:
      'Checklists are not end-to-end encrypted. They are stored on our servers so that everyone on the list sees the same items. Do not put private information in a checklist.',
  },
];

export const PREMIUM = [
  {
    icon: FaTags,
    title: 'Premium list creation',
    summary: 'A price list for your shop that customers order from.',
    points: [
      'Add each item with its quantity and price. Customers see the price before they order.',
      'Share the list with as many customers as you like; the Normal limits do not apply.',
      'Give the list a picture, such as your shop front or logo. Customers see it wherever your list appears.',
      'Edit prices and items any time. Customers always see the current list.',
    ],
    caveat:
      'If your subscription lapses, your price lists are locked: they appear greyed out and cannot be opened by you or your customers until Premium is active again. Nothing is deleted.',
  },
  {
    icon: FaShoppingBasket,
    title: 'Checking the orders',
    summary: 'Every order lands in your chat with that customer, ready to pack.',
    points: [
      'Each order lists the items and quantities the customer chose from your list.',
      'Open an order to pack it: tick each item as it goes in the bag and leave unavailable items unticked.',
      'Send the customer a PDF slip showing what was packed, what was not available, and the updated amount to pay.',
      'Confirm, ask a question or arrange pickup or delivery in the same chat.',
      'Payment stays between you and the customer, the way it already works.',
    ],
  },
];

export const PREMIUM_NOTES = [
  'Premium is a paid subscription, billed through Razorpay. The price and billing period are shown in the app before you subscribe.',
  'Premium also removes the Normal account limits on checklists.',
  'See the Shop Owner Agreement and the Refund & Cancellation Policy for the terms.',
];

// The Normal and Premium table on the Features page. Each row is [what, Normal, Premium]; true and
// false show as a tick and a dash, text is shown as written.
export const COMPARE = [
  ['Messaging, voice and video calls', true, true],
  [`Groups (up to ${LIMITS.groupMaxMembers} people) and group calls (up to ${LIMITS.groupCallMaxMembers})`, true, true],
  ['End-to-end encrypted chats', true, true],
  ['Block and report', true, true],
  ['Checklists', `Up to ${LIMITS.normalMaxLists}, each shared with up to ${LIMITS.normalMaxPeoplePerList} people`, 'No limits'],
  ['Price lists with item prices', false, true],
  ['A picture for your list', false, true],
  ['Customer orders, packing and PDF slip', false, true],
  ['Cost', 'Free', 'Paid subscription'],
];
