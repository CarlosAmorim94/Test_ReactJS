import { render, screen } from '@testing-library/react'
import Counter from '.'

describe('Counter component', () => {
  test('Must start with value 0', () => {
    render(<Counter />)

    const counterTitle = screen.getByText('0');

    expect(counterTitle).toBeInTheDocument();
  });

});