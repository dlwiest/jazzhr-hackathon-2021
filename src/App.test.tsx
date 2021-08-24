import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to To Do view', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/To Do/i)[0];
  expect(linkElement).toBeInTheDocument();
});
