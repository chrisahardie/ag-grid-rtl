import { render, screen } from '@testing-library/react';
import App from './App';

test('grid that fails test', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/hank/i);
  expect(linkElement).toBeInTheDocument();
});
