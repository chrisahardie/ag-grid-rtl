import { render, screen } from '@testing-library/react';
import FailingGrid from './FailingGrid';

test('grid that fails test', async () => {
  render(<FailingGrid />);
  const consigneeName = await screen.findByText(/hank/i);
  expect(consigneeName).toBeInTheDocument();
});
