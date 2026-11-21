import { COMPANY, SUPPORT } from '../company';

const { appName: APP, legalName: CO, email: EMAIL } = COMPANY;

export const customerAgreement = {
  title: 'Customer Agreement',
  summary: `For people who use ${APP} to order from local shops.`,
  sections: [
    {
      h: 'Who this is for',
      items: [
        `This agreement applies when you use ${APP} to view a shop's list or send an order to a shop. It adds to the Terms & Conditions.`,
      ],
    },
    {
      h: 'How ordering works',
      items: [
        [
          'A shop owner shares a list of items, quantities and prices with you.',
          'You choose the items and quantities you want and send the order to the shop through the app.',
          'The shop packs your order and ticks off what it has. If some items are not available, the shop sends you a PDF slip in the chat listing what was packed, what was not available, and the updated amount to pay.',
          'You pay the shop and collect the goods, or arrange delivery with the shop directly.',
        ],
      ],
    },
    {
      h: 'Your order is with the shop',
      items: [
        `${CO} is not the seller. The contract of sale is between you and the shop. The shop decides its prices, what is in stock, substitutions, and whether it accepts your order.`,
        'An order sent through the app is a request to the shop. It is confirmed when the shop accepts it.',
      ],
    },
    {
      h: 'Prices and payment',
      items: [
        `Prices shown on a list are set by the shop and may change. Confirm the final amount with the shop. ${APP} does not collect payment for orders; you pay the shop in the way you and the shop agree.`,
      ],
    },
    {
      h: 'Collection and delivery',
      items: [
        'Collection and delivery are arranged between you and the shop. See the Delivery Policy.',
      ],
    },
    {
      h: 'Problems with an order',
      items: [
        'If items are missing, wrong, damaged or of poor quality, raise it with the shop first. Returns, replacements and refunds for goods are decided by the shop and by consumer law.',
        `If a shop is behaving dishonestly or abusively, report it to us at ${EMAIL}. We can warn, suspend or remove shops that break our rules.`,
      ],
    },
    {
      h: 'What we ask of you',
      items: [
        [
          'Send orders you genuinely intend to buy.',
          'Collect or receive your order as agreed, and pay the shop as agreed.',
          'Treat shop owners and their staff with respect.',
        ],
      ],
    },
  ],
  related: [
    ['/legal/delivery-policy', 'Delivery Policy'],
    ['/legal/refund-and-cancellation', 'Refund & Cancellation Policy'],
    ['/legal/terms-and-conditions', 'Terms & Conditions'],
  ],
};

export const shopOwnerAgreement = {
  title: 'Shop Owner Agreement',
  summary: `For shop owners who use ${APP} Premium to share lists and receive orders.`,
  sections: [
    {
      h: 'Who this is for',
      items: [
        `This agreement applies when you use ${APP} to create lists, share them with customers and receive orders. It adds to the Terms & Conditions.`,
      ],
    },
    {
      h: 'Your shop and your responsibilities',
      items: [
        'You run your own business. You are the seller of the goods you list, and you are responsible for:',
        [
          'Holding the licences and registrations your business needs, such as FSSAI, GST and shop licences where they apply.',
          'Listing only goods you are legally allowed to sell.',
          'Keeping item names, quantities and prices accurate, and telling customers promptly when something is unavailable.',
          'The quality, safety, weight and expiry of what you sell.',
          'Billing, taxes, and giving customers a proper bill where required.',
          'Returns, replacements and refunds for your goods, in line with consumer law.',
          'Collection and delivery arrangements with your customers.',
        ],
      ],
    },
    {
      h: 'Premium subscription',
      items: [
        'Creating and sharing lists with prices requires an active Premium subscription. Premium also removes the Normal account limits of 50 lists and 60 people per list. The price and billing period are shown in the app before you subscribe. Payment is collected through Razorpay and renews automatically until you cancel.',
        'If a renewal payment fails, Premium features stop until payment succeeds. Your existing lists are kept. See the Refund & Cancellation Policy.',
      ],
    },
    {
      h: 'Sharing lists with customers',
      items: [
        [
          'Share lists only with people who are your customers or who have asked to receive them.',
          'The picture you choose for a Premium list is shown to everyone the list is shared with. Use only a picture you have the right to use, such as your shop front or logo.',
          'Do not use the app to send unsolicited promotions.',
          'Stop sharing with a customer who asks you to.',
        ],
      ],
    },
    {
      h: 'Customer information',
      items: [
        'You will see the names, numbers and orders of customers who deal with you. Use this information only to serve those customers. Do not sell it, share it, or use it to contact them about anything unrelated without their permission.',
      ],
    },
    {
      h: 'Orders',
      items: [
        'An order is a request from the customer. Confirm promptly whether you can fulfil it, and tell the customer about any change in price or substitution before you pack it.',
        'Open the order in the app to pack it: tick each item as it is packed and leave unavailable items unticked. The app then sends the customer a PDF slip showing what was packed, what was not available and the updated amount to pay. The slip is made from what you ticked, so check it before sending. The amount on it is between you and the customer; we do not collect it.',
      ],
    },
    {
      h: 'What we provide, and what we do not',
      items: [
        `We provide the app as a way to share lists, receive orders and communicate. We do not guarantee any number of customers or orders. We do not collect payment for your orders and do not take a commission on them.`,
      ],
    },
    {
      h: 'Suspension',
      items: [
        'We may suspend or remove a shop that lists unlawful goods, misleads customers, misuses customer information, or receives repeated justified complaints. Where we reasonably can, we will tell you why and give you a chance to respond.',
      ],
    },
  ],
  related: [
    ['/legal/refund-and-cancellation', 'Refund & Cancellation Policy'],
    ['/legal/delivery-policy', 'Delivery Policy'],
    ['/legal/community-guidelines', 'Community Guidelines'],
  ],
};

export const refundAndCancellation = {
  title: 'Refund & Cancellation Policy',
  summary: 'How cancelling and refunds work for the Premium subscription, and for orders placed with shops.',
  sections: [
    {
      h: 'Two different things',
      items: [
        [
          `The Premium subscription is something you buy from ${CO}. This policy sets out how to cancel it and when we refund it.`,
          'Goods you order from a shop are bought from that shop, not from us. We do not collect that money, so we cannot refund it.',
        ],
      ],
    },
    {
      h: 'Cancelling Premium',
      items: [
        [
          `You can cancel at any time. Write to ${EMAIL} from your registered details, or cancel the autopay mandate in your bank or UPI app.`,
          'When you cancel, automatic renewal stops. You keep Premium until the end of the period you have already paid for.',
          'After that, you can no longer create or share lists. Your account, chats and existing lists remain.',
        ],
      ],
    },
    {
      h: 'Refunds for Premium',
      items: [
        'Subscription fees already charged are generally not refunded for a period that has started. We will refund in these cases:',
        [
          'You were charged more than once for the same period.',
          'You were charged after cancelling.',
          'A technical fault on our side meant you could not use Premium for a significant part of the period.',
          'Where a refund is required by law.',
        ],
        `To ask for a refund, write to ${EMAIL} from your registered details with your mobile number and the date and amount of the charge.`,
      ],
    },
    {
      h: 'How refunds are paid',
      items: [
        'Approved refunds are sent back to the original payment method through Razorpay. Your bank or payment provider decides how long it takes to appear, usually 5 to 7 working days.',
      ],
    },
    {
      h: 'Failed payments',
      items: [
        'If a renewal payment fails, Premium is paused until a payment succeeds. You are not charged for the time it is paused.',
        'While Premium is paused or cancelled, your priced lists are locked. They appear greyed out and cannot be opened by you or by the customers they were shared with. Nothing is deleted, and the lists open again as soon as Premium is active. Plain checklists are not affected.',
      ],
    },
    {
      h: 'Orders placed with shops',
      items: [
        'To cancel or change an order, contact the shop as soon as possible, in the chat or by phone. Whether an order can be cancelled, returned or refunded is decided by the shop and by consumer law.',
        `If you cannot resolve a problem with a shop, tell us at ${EMAIL}. We cannot refund the shop's money, but we can raise the matter with the shop and act against shops that break our rules.`,
      ],
    },
  ],
  related: [
    ['/legal/shop-owner-agreement', 'Shop Owner Agreement'],
    ['/legal/customer-agreement', 'Customer Agreement'],
    ['/support/contact-us', 'Contact Us'],
  ],
};

export const deliveryPolicy = {
  title: 'Delivery Policy',
  summary: `${APP} does not deliver goods. Collection and delivery are arranged between the shop and the customer.`,
  sections: [
    {
      h: 'The short version',
      items: [
        `${CO} does not pick up, transport or deliver any goods, and does not employ or assign delivery staff. ${APP} is the way the order and the conversation reach the shop.`,
      ],
    },
    {
      h: 'How customers get their order',
      items: [
        [
          'Collect it from the shop when it is ready, or',
          'Agree home delivery with the shop, if the shop offers it.',
        ],
        'Use the chat or a call in the app to agree the time, the place and any delivery charge.',
      ],
    },
    {
      h: 'What the shop is responsible for',
      items: [
        [
          'Telling the customer when the order will be ready or delivered.',
          'Any delivery charge, which must be made clear before the order is confirmed.',
          'The condition of the goods until they are handed over.',
          'Its own delivery staff or delivery partners.',
        ],
      ],
    },
    {
      h: 'What the customer is responsible for',
      items: [
        [
          'Giving a correct address and being available at the agreed time.',
          'Checking the goods when they are received.',
          'Paying the shop as agreed.',
        ],
      ],
    },
    {
      h: 'Sharing your location',
      items: [
        'You can share your location with a shop in the chat to help with delivery. This is your choice each time; the app does not track or share your location in the background.',
      ],
    },
    {
      h: 'Late, missing or damaged deliveries',
      items: [
        `Raise the problem with the shop first. If the shop does not respond or you believe it is acting unfairly, write to us at ${EMAIL}.`,
      ],
    },
  ],
  related: [
    ['/legal/customer-agreement', 'Customer Agreement'],
    ['/legal/shop-owner-agreement', 'Shop Owner Agreement'],
  ],
};

export const communityGuidelines = {
  title: 'Community Guidelines',
  summary: `What is and is not allowed on ${APP}, so it stays useful and safe for shops, customers, friends and family.`,
  sections: [
    {
      h: 'Be honest',
      items: [
        [
          'Use your own name and number. Do not pretend to be another person or business.',
          'Shop owners: list real items at real prices.',
          'Customers: send orders you intend to buy.',
        ],
      ],
    },
    {
      h: 'Be respectful',
      items: [
        [
          'No harassment, threats, bullying or hate directed at anyone.',
          'No sexual content sent to someone who has not asked for it, and nothing sexual involving minors, ever.',
          'Stop contacting someone who asks you to stop.',
        ],
      ],
    },
    {
      h: 'Keep it legal',
      items: [
        [
          'Do not list, order or arrange the sale of illegal or restricted goods, such as drugs, weapons, tobacco or alcohol where sale is not permitted, prescription medicines without authority, or counterfeit goods.',
          'Do not use the app for fraud, scams, or to collect money under false pretences.',
          'Do not share content that infringes someone else\'s rights.',
        ],
      ],
    },
    {
      h: 'No spam',
      items: [
        [
          'Do not send bulk or repeated unwanted messages or calls.',
          'Shop owners: share lists with your customers, not with strangers.',
        ],
      ],
    },
    {
      h: 'Respect privacy',
      items: [
        [
          'Do not share another person\'s private information, photos or messages without their permission.',
          'Shop owners: use customer details only to serve those customers.',
          'Group admins: add only people who want to be in the group, and do not share the group\u2019s messages outside it. Anyone can leave a group at any time.',
        ],
      ],
    },
    {
      h: 'Keep the service safe',
      items: [
        [
          'Do not try to break into accounts, overload the service, or spread malware.',
          'Do not use automated tools to create accounts or send messages.',
        ],
      ],
    },
    {
      h: 'Reporting a problem',
      items: [
        `You can block a user in the app, and report them from the flag at the top of the chat. You can also write to ${EMAIL} with their number and what happened. Because chat messages are encrypted, we cannot read them ourselves; include screenshots if you want us to see what was said.`,
      ],
    },
    {
      h: 'What we do about it',
      items: [
        `Depending on how serious the problem is, we may warn the user, restrict features, suspend the account, or remove it permanently. We report content involving the sexual abuse of children and threats to life to the authorities. Complaints are handled as set out on the Grievance Redressal page, where we acknowledge within ${SUPPORT.grievanceAcknowledgeHours} hours.`,
      ],
    },
  ],
  related: [
    ['/support/grievance-redressal', 'Grievance Redressal'],
    ['/legal/terms-and-conditions', 'Terms & Conditions'],
  ],
};
