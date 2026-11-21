import { COMPANY, LEGAL, SUPPORT } from '../company';

const { appName: APP, legalName: CO, email: EMAIL } = COMPANY;

// Each document is a list of sections. Inside a section, a string is a paragraph and an array
// is a bulleted list.

export const privacyPolicy = {
  title: 'Privacy Policy',
  summary: `What ${APP} collects, why, who it is shared with, and the choices you have.`,
  sections: [
    {
      h: 'Who we are',
      items: [
        `${APP} is operated by ${CO} ("we", "us"), registered in India (CIN ${COMPANY.cin}). This policy explains how we handle personal information when you use the ${APP} mobile app and this website.`,
        `If you have a question about this policy or your information, write to ${EMAIL}.`,
      ],
    },
    {
      h: 'Information we collect',
      items: [
        'Information you give us:',
        [
          'Your mobile number, which is your account. We send a one-time code by SMS to confirm it.',
          'Your display name, and optionally an email address and a profile photo.',
          'Lists and orders: item names, quantities, prices, who a list is shared with, and, for shop owners, the picture chosen for a Premium list.',
          'Groups: the name of a group, who its members and admins are, and when people joined or left.',
          'Reports and blocks: if you report or block someone, we keep the report (who it is about, the reason you chose and the details you give) so we can review it.',
          'Photos, videos and files you choose to send in a chat.',
          'Your location, only when you choose to share it in a chat.',
        ],
        'Information the app needs to work:',
        [
          'Phone numbers from your address book, if you allow contacts access. When the app syncs your contacts, it sends these numbers to our servers, which compare them with registered users and send back which of your contacts already use the app. The numbers are used only for that check and are not saved on our servers. Your contact names are not sent.',
          'Device details: phone model, operating system, app version, and a push notification token.',
          'Encryption keys: the public keys your phone shares so others can send you encrypted messages, and sealed copies of group keys that only the phones of the group\u2019s members can open.',
          'Login session details, such as when you signed in and from which device.',
          'Technical logs used to keep the service running and secure.',
        ],
        'Messages:',
        [
          'One-to-one chat messages are end-to-end encrypted: they are encrypted on your phone before they are sent and can be opened only on the other person’s phone. We store the encrypted message so it can be delivered, and we cannot read its text. Group messages are end-to-end encrypted in the same way, with a key that only the members\u2019 phones hold.',
          'Photos, videos, audio and files you attach are stored on our servers so they can be delivered, and are reached through short-lived links. They are encrypted in transit but are not end-to-end encrypted. Your phone does not download them by itself unless your Storage and data settings allow it.',
          'Voice and video calls connect phone to phone, or through a relay server when a direct connection is not possible. Call audio and video are encrypted in transit and the relay cannot listen in. We do not record calls.',
        ],
        'Lists and orders:',
        [
          'Checklists, Premium price lists and orders are stored on our servers so they can be shared and kept in sync. They are encrypted in transit but are not end-to-end encrypted, so they are readable on our servers. We plan to add end-to-end encryption for checklists in a future update.',
        ],
        'Payments:',
        [
          'Premium subscriptions for shop owners are paid through Razorpay. We receive the subscription status and a reference from Razorpay. We do not receive or store your card, UPI or bank details.',
        ],
      ],
    },
    {
      h: 'How we use information',
      items: [
        [
          'To create your account and sign you in.',
          'To deliver messages, calls, lists and orders between you and the people you choose.',
          'To show which of your contacts use the app.',
          'To send notifications about messages, calls and orders.',
          'To manage Premium subscriptions.',
          'To keep the service secure, prevent misuse, and fix problems.',
          'To meet legal obligations.',
        ],
        'We do not sell your personal information, and we do not use the content of your chats for advertising.',
      ],
    },
    {
      h: 'Who we share information with',
      items: [
        'Other users, as part of using the app: your name, profile photo and number are visible to people you chat with or who have your number; a shop owner sees the orders you send; customers see the lists a shop shares with them.',
        'Service providers that help us run the app, who may only use the information to provide their service to us:',
        [
          'mySMSmantra, our SMS provider, to deliver login codes.',
          'Google Cloud, for servers and file storage. Our servers and stored files are in Google Cloud’s Mumbai region, in India.',
          'Firebase Cloud Messaging, for push notifications.',
          'Razorpay, for subscription payments.',
          'A map provider, to show a map preview when a location is shared.',
        ],
        'Authorities, when the law requires it or to protect the safety and rights of our users and the public.',
        'A successor, if the company is merged, acquired or reorganised. You will be told before your information becomes subject to a different policy.',
      ],
    },
    {
      h: 'Permissions the app asks for',
      items: [
        [
          'Contacts: to find people you know on the app.',
          'Camera and microphone: to take photos and make voice and video calls.',
          'Photos and media: to send pictures, videos and files you pick.',
          'Location: to share your position in a chat when you ask it to.',
          'Notifications: to tell you about new messages, calls and orders.',
        ],
        'You can turn any permission off in your phone settings. The related feature will stop working; the rest of the app will not.',
      ],
    },
    {
      h: 'How long we keep information',
      items: [
        'We keep your account information for as long as your account exists. Login codes expire within minutes. Undelivered messages are kept until they are delivered or expire.',
        `When you delete your account in the app, your information is deleted straight away. If you ask us to delete it by email, we do so within ${SUPPORT.deletionWithinDays} days. In both cases we keep records we must keep by law, such as payment and tax records.`,
        'Reports about a user are kept after they are made, even if the user or the person who reported them later deletes their account, so that we can keep other users safe. A report you made is no longer linked to your account once you delete it.',
        'If a shop owner\u2019s Premium subscription ends, their priced lists are locked, not deleted, and open again if Premium is renewed.',
        'Messages and files already delivered to other people stay on their phones, and messages other people sent in a group you were in stay with the group’s remaining members.',
        'When you delete your account, messages still waiting to be delivered to you are discarded, messages you sent that are still on our servers are deleted, and messages on your phone that you had not yet opened are removed with the rest of the app data. Your encryption keys are deleted too, so those messages can never be opened afterwards.',
      ],
    },
    {
      h: 'Security',
      items: [
        'We use encryption in transit for everything the app sends, end-to-end encrypt one-to-one and group chat messages on your devices, limit staff access to what is needed, and review our systems. No service can promise perfect security. If we learn of a breach that affects you, we will tell you and the authorities as the law requires.',
      ],
    },
    {
      h: 'Your choices and rights',
      items: [
        [
          'See and correct your name, email and photo in the app.',
          'Block or report a user from the chat, and choose which media downloads by itself in Settings, Storage and data.',
          'Ask for a copy of the personal information we hold about you.',
          'Withdraw consent for contacts, location, camera, microphone or notifications in your phone settings.',
          'Delete your account. See the Delete My Account page.',
          'Raise a complaint with our Grievance Officer. See the Grievance Redressal page.',
          'Nominate another person to exercise your rights if you are unable to.',
        ],
        `To use any of these rights, write to ${EMAIL} from your registered details. We may ask you to confirm your mobile number first.`,
      ],
    },
    {
      h: 'Children',
      items: [
        `${APP} is for people aged ${LEGAL.minimumAge} and over. We do not knowingly collect information from anyone younger. If you believe a child is using the app, tell us and we will remove the account.`,
      ],
    },
    {
      h: 'Changes to this policy',
      items: [
        'If we change this policy we will update the date at the top of this page. For significant changes we will also tell you in the app before they take effect.',
      ],
    },
  ],
  related: [
    ['/support/delete-my-account', 'Delete My Account'],
    ['/support/grievance-redressal', 'Grievance Redressal'],
    ['/legal/terms-and-conditions', 'Terms & Conditions'],
  ],
};

export const termsAndConditions = {
  title: 'Terms & Conditions',
  summary: `The rules for using ${APP}. By creating an account you agree to them.`,
  sections: [
    {
      h: 'About these terms',
      items: [
        `These terms are an agreement between you and ${CO} ("we", "us") for your use of the ${APP} app and this website. If you use the app as a customer, the Customer Agreement also applies. If you use it as a shop owner, the Shop Owner Agreement also applies.`,
        'If you do not agree with these terms, please do not use the app.',
      ],
    },
    {
      h: 'What the app is',
      items: [
        `${APP} is a communication app with local commerce built in. Users message and call each other, one-to-one and in groups, and keep shared checklists. Shop owners with a Premium subscription share lists of items and prices, and customers send orders from those lists.`,
        `${APP} is a way for shops and customers to communicate. We are not the seller of any goods, we do not set prices, and we do not handle payment or delivery for orders. The sale is between the shop and the customer.`,
      ],
    },
    {
      h: 'Your account',
      items: [
        [
          `You must be at least ${LEGAL.minimumAge} years old.`,
          'You sign in with your mobile number and a one-time code. Use a number that belongs to you.',
          'Keep your phone and login codes to yourself. You are responsible for what happens on your account.',
          'An account is signed in on one phone at a time. Signing in on a new phone signs you out of the old one.',
          'Give accurate information and keep it up to date.',
        ],
      ],
    },
    {
      h: 'Acceptable use',
      items: [
        'You agree to follow the Community Guidelines. In particular, you will not:',
        [
          'Use the app for anything unlawful, or to list or order goods that are illegal to sell.',
          'Harass, threaten, deceive or impersonate anyone.',
          'Send spam or unwanted bulk messages.',
          'Try to break, overload, copy or reverse engineer the app or its servers.',
          'Access or attempt to access another person\'s account or information.',
        ],
      ],
    },
    {
      h: 'Your content',
      items: [
        'You keep ownership of the messages, lists, photos and files you send. You give us permission to store, transmit and display them only as needed to run the service for you and the people you share them with.',
        'You are responsible for what you send and for having the right to send it.',
      ],
    },
    {
      h: 'Premium subscription',
      items: [
        'Every account starts as a Normal account, which can create up to 50 lists and share each list with up to 60 people. Premium is the paid plan for shop owners: it adds lists with prices and removes both limits. The price and billing period are shown in the app before you subscribe. Payment is collected through Razorpay and renews automatically until you cancel. See the Refund & Cancellation Policy.',
      ],
    },
    {
      h: 'Availability and changes',
      items: [
        'We work to keep the app available but do not promise it will always be uninterrupted or error-free. We may add, change or remove features. If we make a change that significantly reduces a paid feature, we will tell you in advance.',
      ],
    },
    {
      h: 'Suspension and closing an account',
      items: [
        'You can stop using the app and delete your account at any time. We may suspend or close an account that breaks these terms or the law, or that puts other users or the service at risk. Where we reasonably can, we will tell you why.',
      ],
    },
    {
      h: 'Our responsibility to you',
      items: [
        'The app is provided as it is. To the extent the law allows:',
        [
          'We are not responsible for the quality, safety, price, availability or delivery of goods ordered from a shop through the app.',
          'We are not responsible for disputes between users, though we will try to help where we can.',
          'We are not liable for indirect or consequential losses.',
          'Our total liability to you is limited to the amount you paid us in the twelve months before the claim.',
        ],
        'Nothing in these terms limits rights you have under consumer protection law that cannot be limited.',
      ],
    },
    {
      h: 'Law and disputes',
      items: [
        `These terms are governed by the laws of India. Please contact us first so we can try to resolve any problem; see the Grievance Redressal page. If that fails, the courts of ${LEGAL.governingCourts} have jurisdiction.`,
      ],
    },
    {
      h: 'Changes to these terms',
      items: [
        'We may update these terms. We will change the date at the top of this page and, for significant changes, tell you in the app before they take effect. Continuing to use the app after that means you accept the updated terms.',
      ],
    },
  ],
  related: [
    ['/legal/customer-agreement', 'Customer Agreement'],
    ['/legal/shop-owner-agreement', 'Shop Owner Agreement'],
    ['/legal/community-guidelines', 'Community Guidelines'],
    ['/legal/privacy-policy', 'Privacy Policy'],
  ],
};
