import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '.';

describe('Counter component', () => {

  test('Must start with value 0', () => {
    render(<Counter />);

    const counterTitle = screen.getByText('0');

    expect(counterTitle).toBeInTheDocument();
  });
  
  test('Must start with class counter_title in title', () => {
    render(<Counter />);

    const counterTitle = screen.getByText('0');

    expect(counterTitle).toHaveClass('counter__title');
  });
  
  test('Dont must start the title with the class counter__title--increment and counter__title--decrement', () => {
    render(<Counter />);

    const counterTitle = screen.getByText('0');

    expect(counterTitle).not.toHaveClass('counter__title--increment');
    expect(counterTitle).not.toHaveClass('counter__title--decrement');
  });

  test('Must have a button incrementar', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(buttonIncrement).toBeInTheDocument()
  });

  test('Must have a button incrementar with the class button and button__increment', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(buttonIncrement).toHaveClass('button')
    expect(buttonIncrement).toHaveClass('button--increment')
  });

  test('Must have a button decrementar', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(buttonDecrement).toBeInTheDocument()
  });

  test('Must have a button incrementar with the class button and button__decrement', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(buttonDecrement).toHaveClass('button')
    expect(buttonDecrement).toHaveClass('button--decrement')
  });

  test('Must add +1 on click in the button incrementar', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(screen.queryByText('1')).toBeNull()
    userEvent.click(buttonIncrement)

    expect(screen.getByText('1')).toBeInTheDocument()
  });

  test('Must remove -1 on click in the button decrementar', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(screen.queryByText('-1')).toBeNull()
    userEvent.click(buttonDecrement)

    expect(screen.getByText('-1')).toBeInTheDocument()
  });

  test('Must add the class counter__title--increment in the title when the value is bigger than 0', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(screen.queryByText('0')).not.toHaveClass('counter__title--increment')
    userEvent.click(buttonIncrement)

    expect(screen.getByText('1')).toHaveClass('counter__title--increment')
  });

  test('Must add the class counter__title--decrement in the title when the value is smaller than 0', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /Decrementar/i});

    expect(screen.queryByText('0')).not.toHaveClass('counter__title--decrement')
    userEvent.click(buttonDecrement)

    expect(screen.getByText('-1')).toHaveClass('counter__title--decrement')
  });
  
  
});
