import { COMPANY, SUPPORT } from './company';

const { appName: APP, email: EMAIL } = COMPANY;

// Help & Support: questions grouped by topic. Each answer is a list of paragraphs.
export const HELP_TOPICS = [
  {
    title: 'Signing in',
    questions: [
      {
        q: 'How do I sign in?',
        a: [
          'Enter your 10-digit Indian mobile number. We send a 6-digit code by SMS. Enter the code and you are in. There is no password.',
        ],
      },
      {
        q: 'I did not receive the code.',
        a: [
          'Check that the number is correct and that your phone has signal, then wait a minute and ask for a new code. Codes are valid for 10 minutes.',
          'To protect your number, only a limited number of codes can be requested in a day. If you have reached the limit, try again later.',
        ],
      },
      {
        q: 'It says there were too many incorrect attempts.',
        a: ['After several wrong entries the code is cancelled. Ask for a new code and enter it carefully.'],
      },
      {
        q: 'Can I use my account on two phones?',
        a: [
          'No. Your account is signed in on one phone at a time. Signing in on a new phone signs you out of the old one.',
        ],
      },
    ],
  },
  {
    title: 'For shop owners',
    questions: [
      {
        q: 'How do I share my price list with customers?',
        a: [
          'Subscribe to Premium, create a list, add your items with quantity and price, then share the list with customers by choosing them from your contacts. They need to have the app installed.',
        ],
      },
      {
        q: 'How do I pack an order and tell the customer what to pay?',
        a: [
          'Open the order in the chat and tap "Open order to pack". Tick each item as you pack it and leave unavailable items unticked.',
          'Tap "Send to customer". The customer receives a PDF slip with the packed items, the items that were not available, and the updated amount to pay.',
        ],
      },
      {
        q: 'How do I add a picture to my price list?',
        a: ['Tap the picture box next to the list name while creating a Premium list. To change it later, open the list and tap its picture at the top.'],
      },
      {
        q: 'How do orders reach me?',
        a: ['An order arrives in your chat with that customer, as a list of the items and quantities they chose.'],
      },
      {
        q: 'What happens if my Premium payment fails?',
        a: [
          'Premium is paused until a payment succeeds. Your account, chats and lists are kept, but your priced lists are locked: they appear greyed out and cannot be opened by you or your customers. They open again as soon as Premium is active. Plain checklists are not affected. See the Refund & Cancellation Policy.',
        ],
      },
      {
        q: 'Does the app take a share of my sales?',
        a: [`No. Customers pay you directly. ${APP} does not collect payment for orders.`],
      },
    ],
  },
  {
    title: 'For customers',
    questions: [
      {
        q: 'How do I order from a shop?',
        a: [
          'Open the list the shop shared with you, choose the items and quantities you want, and send the order. The shop will confirm in the chat.',
        ],
      },
      {
        q: 'How do I pay?',
        a: ['You pay the shop directly, in the way you and the shop agree. The app does not take payment for orders.'],
      },
      {
        q: 'Why is a shop list greyed out?',
        a: [
          "The shop's Premium subscription is not active, so its priced list is unavailable for now. It opens again by itself when the shop renews.",
        ],
      },
      {
        q: 'Who delivers my order?',
        a: ['You collect it from the shop, or agree delivery with the shop. See the Delivery Policy.'],
      },
      {
        q: 'Something was wrong with my order.',
        a: [`Contact the shop first. If you cannot resolve it, write to us at ${EMAIL}.`],
      },
    ],
  },
  {
    title: 'Chat and calls',
    questions: [
      {
        q: 'Why can I not see my contacts?',
        a: [
          'Allow contacts access in your phone settings. Only contacts who have installed the app appear; you can invite the others.',
        ],
      },
      {
        q: 'Calls do not connect, or the other person cannot hear me.',
        a: [
          'Allow microphone access (and camera access for video calls) in your phone settings, and check your internet connection.',
        ],
      },
      {
        q: 'Can anyone else read my messages?',
        a: [
          'The text of one-to-one and group messages is end-to-end encrypted: it is locked on your phone and opened only on the phones of the people in the chat, so we cannot read it. Group calls are end-to-end encrypted too. Calls are not recorded.',
          'Photos, videos and files you send are stored on our servers behind short-lived links, and checklists are not end-to-end encrypted. See the Privacy Policy.',
        ],
      },
      {
        q: 'How do group chats work?',
        a: [
          'Open the menu on the chats screen and choose "New group". Name the group and pick people from your contacts. You become its admin.',
          'Admins can rename the group, add or remove people, and make other people admins, from Group info. Anyone can leave. A group can have up to 100 people.',
          'Voice and video calls are available in groups of up to 5 people. In bigger groups the call buttons are not shown.',
        ],
      },
      {
        q: 'How do I stop photos and videos downloading by themselves?',
        a: [
          'Open Settings, then Storage and data. Choose "When using mobile data", "When connected on Wi-Fi" or "When roaming", and untick what should not download by itself. Those items then show as "Tap to download" in chats.',
        ],
      },
      {
        q: 'How do I block someone?',
        a: ['You can block a contact in the app. Blocked contacts are listed in Settings, where you can unblock them.'],
      },
      {
        q: 'I got a message from a number I do not know. What can I do?',
        a: [
          'Open the chat and tap the flag at the top to report the sender. Choose a reason, and choose "Report and block" if you do not want to hear from them again.',
          'Chats from numbers that are not in your contacts show a notice at the top with the same option.',
        ],
      },
    ],
  },
  {
    title: 'Your account',
    questions: [
      {
        q: 'How do I change my name, email or photo?',
        a: ['Open Settings, then Account.'],
      },
      {
        q: 'How do I delete my account?',
        a: [
          'In the app, open Settings, then Account, then "Delete my account", and choose "Delete" in the pop-up that asks you to confirm. See the Delete My Account page for what is deleted.',
        ],
      },
      {
        q: 'What is the difference between a Normal and a Premium account?',
        a: [
          'Every account starts as Normal. A Normal account can create up to 50 lists and share each list with up to 60 people.',
          'Premium is the paid plan for shop owners. It adds priced lists and removes both limits. Your current plan is shown in Settings, under Subscription.',
        ],
      },
    ],
  },
];

// Delete My Account
export const DELETION = {
  inApp: [
    'Open Settings, then Account, then "Delete my account".',
    'Read what will be deleted, then tap "Delete my account".',
    'A pop-up tells you that all your data will be permanently deleted. Choose "Delete" to go ahead, or "Cancel" to keep your account. Once you choose "Delete", the account is deleted straight away and cannot be restored.',
  ],
  steps: [
    `Send an email to ${EMAIL} with the subject "Delete my account".`,
    'Include the mobile number registered with the app.',
    'We will confirm that the number is yours, usually by sending a code or calling that number.',
    `We delete the account within ${SUPPORT.deletionWithinDays} days and email you when it is done.`,
  ],
  deleted: [
    'Your profile: name, mobile number, email address and profile photo.',
    'Your login sessions and notification token.',
    'Lists you created, including their pictures, and your place on lists shared with you.',
    'Your Premium subscription is cancelled so you are not charged again.',
    'Your place in groups, and the sealed group keys held for you on our servers.',
    'Undelivered messages: anything still waiting on our servers to be delivered to you is discarded and will not be delivered later.',
    'Messages you sent that are still stored on our servers, and the files attached to them.',
    'Undecrypted messages: messages on your phone that you have not opened yet are removed from the phone with the rest of its app data. Your encryption keys are deleted at the same time, so those messages can never be opened afterwards, by you or by anyone else, including us.',
    'Your encryption keys held on our servers.',
  ],
  kept: [
    'Payment and tax records for Premium subscriptions, for the period the law requires.',
    'Records we must keep to respond to a legal request or to resolve an open complaint.',
    'Reports made about a user, which are kept so that we can keep other people safe.',
    'Messages, files and orders already delivered to other people, which remain on their phones. We cannot remove them from their phones.',
    'Messages other people sent in a group you were in stay with the remaining members of the group.',
  ],
};
