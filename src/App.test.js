import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MENU } from './content/sitemap';
import { LEGAL_DOCS } from './content/legal';

const openAt = path => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('the home page says what the app does', () => {
  openAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/talk privately\.\s*shop locally\./i);
  expect(screen.getByRole('heading', { name: /order from the shops you trust/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /your conversations stay yours/i })).toBeInTheDocument();
  // the hero no longer carries a phone screenshot
  expect(screen.queryByAltText(/in the app/i)).not.toBeInTheDocument();
});

test('the features page lists the free features and what Premium adds', () => {
  openAt('/features');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/everything in one app/i);
  expect(document.title).toMatch(/features & premium/i);
  expect(screen.getByRole('table')).toBeInTheDocument();
  expect(screen.queryByText(/walkthrough/i)).not.toBeInTheDocument();
  for (const name of ['Calling', 'Messaging', 'Grouping', 'Security', 'Checklist']) {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  }
  expect(screen.getByRole('heading', { name: /premium list creation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /checking the orders/i })).toBeInTheDocument();
  expect(screen.getByText(/^Checklists are not end-to-end encrypted/)).toBeInTheDocument();
  expect(screen.getByText(/End-to-end encrypted one-to-one messages/)).toBeInTheDocument();
});

test('every page listed in the menus opens with its own title', () => {
  for (const group of MENU) {
    for (const [path, label] of group.links) {
      const { unmount } = openAt(path);
      const title = screen.getByRole('heading', { level: 1 }).textContent;
      expect(title).not.toMatch(/page not found/i);
      // Compare on the first word, so "Help & Support" matches the title "Help & Support".
      expect(title.toLowerCase()).toContain(label.split(' ')[0].toLowerCase());
      unmount();
    }
  }
});

test('every legal page in the menu has a document, and each shows its sections', () => {
  const legal = MENU.find(group => group.title === 'Legal');
  expect(legal.links).toHaveLength(Object.keys(LEGAL_DOCS).length);
  for (const [path] of legal.links) {
    const { unmount } = openAt(path);
    expect(screen.getByText(/last updated/i)).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(4);
    unmount();
  }
});

test('an unknown address shows the not-found page', () => {
  openAt('/legal/no-such-document');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/page not found/i);
});

test('a header menu opens to show its pages', () => {
  openAt('/');
  const button = screen.getByRole('button', { name: /^legal/i });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  expect(screen.getByRole('button', { name: /^legal/i })).toHaveAttribute('aria-expanded', 'true');
  // once in the open menu, once in the footer
  expect(screen.getAllByRole('link', { name: 'Privacy Policy' }).length).toBeGreaterThan(1);
});

test('the footer lists every page', () => {
  openAt('/');
  for (const group of MENU) {
    for (const [, label] of group.links) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0);
    }
  }
});

test('terms and privacy are separate pages', () => {
  let view = openAt('/legal/terms-and-conditions');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^terms & conditions$/i);
  view.unmount();
  view = openAt('/legal/privacy-policy');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^privacy policy$/i);
  view.unmount();
  openAt('/legal/terms-and-privacy');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^terms & conditions$/i);
});
