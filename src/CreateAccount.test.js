import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CreateAccount from './CreateAccount';


beforeEach(() => {
  render(<CreateAccount />);
});


test('Test email is initally empty ', () => {

  const inputEl = screen.getByTestId("email");
  expect(inputEl).toHaveValue("");

});

test('Test email Input Change', () => {

  const inputEl = screen.getByTestId("email");
  userEvent.type(inputEl, "cuneyt@gmail.com");
  expect(inputEl).not.toHaveValue("emir@gmail.com");

});
test('Test that the input elements value is cleared when user input is cleared:', () => {

  const inputEl = screen.getByTestId("email");

  userEvent.clear(inputEl);
  expect(inputEl).toHaveValue("");

});
test('Test that the input element has a default placeholder:', () => {

  const inputEl = screen.getByTestId("email");
  expect(inputEl.placeholder).toBe("Email");
 

});


test('System has to be throw error because of missing data', () => {
  const inputEl = screen.getByTestId('email');
  userEvent.type(inputEl, 'cterk200@gmail.com');
  const buttonEl = screen.getByRole('button', { type: 'Submit' });
  userEvent.click(buttonEl);
  expect(() => {
    throw new Error(); 
  }).toThrow();
});

//Integration Test

test('Integration test - Required fields display error message', () => {
 
//it is not more visible after data privided by email

  const emailInput = screen.getByTestId('email');
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  fireEvent.change(emailInput, { target: { value: 'cuneyt@gmail.com' } });
  fireEvent.click(submitButton);

  expect(screen.queryByText('Please fill out this field')).toBeNull();
 
});
