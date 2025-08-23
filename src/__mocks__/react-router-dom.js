const React = require('react');

const mockNavigate = jest.fn();
const mockUseLocation = jest.fn(() => ({ pathname: '/' }));

module.exports = {
  useNavigate: () => mockNavigate,
  useLocation: () => mockUseLocation(),
  Link: ({ children, to, ...props }) => React.createElement('a', { href: to, ...props }, children),
  BrowserRouter: ({ children }) => React.createElement('div', {}, children),
};