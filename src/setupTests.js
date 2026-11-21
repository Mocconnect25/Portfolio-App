// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// The router library expects these to exist, as they do in every browser. The test
// environment does not provide them, so borrow them from Node.
import { TextDecoder, TextEncoder } from 'util';

if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

// Pages scroll to the top when opened; the test environment has no scrolling.
window.scrollTo = () => {};

// jsdom has no scrollIntoView; the layout uses it to jump to #anchors.
window.HTMLElement.prototype.scrollIntoView = () => {};
