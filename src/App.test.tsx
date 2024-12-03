import { render, screen } from '@testing-library/react';
import Calculator from './Calculator/Calculator.module';

test('renders String Calculator', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
