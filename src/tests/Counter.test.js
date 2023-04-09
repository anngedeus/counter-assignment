// import necessary react testing library helpers here
// import the Counter component here
import {fireEvent, render, screen} from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('+');
  const currentCount = screen.getByText(/\d+/);
  const numberCurrentCount = parseInt(currentCount.textContent);
  fireEvent.click(button);
  const newCount = parseInt(currentCount.textContent);
  expect(numberCurrentCount).toBeLessThan(newCount);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('-');
  const currentCount = screen.getByText(/\d+/);
  const numberCurrentCount = parseInt(currentCount.textContent);
  fireEvent.click(button);
  const newCount = parseInt(currentCount.textContent);
  expect(newCount).toBeLessThan(numberCurrentCount);
});
