import { render, screen } from '@testing-library/react';
import PassingGrid from './PassingGrid';

test('demonstrates a grid that passes unit tests', async () => {
  render(<PassingGrid />);
  const ccn = await screen.findByText(/25081/i);
  expect(ccn).toBeInTheDocument();
});
