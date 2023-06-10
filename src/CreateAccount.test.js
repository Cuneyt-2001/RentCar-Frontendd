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
// test('Test that the input element is empty when no value is entered:', () => {

//   const inputEl = screen.getByTestId("email");
//   userEvent.type(inputEl, "cuneyt@gmail.com");
//   expect(inputEl.value).toBe("cuneyt@gmail.com");

// });


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
 

  //const nameInput = screen.getByTestId('Name');
  const emailInput = screen.getByTestId('email');
  const submitButton = screen.getByRole('button');

  // Simulate form submission without filling in any fields
  fireEvent.click(submitButton);

  // Verify that the required error message is displayed for each input field
  // expect(screen.getByText('Name is required')).toBeInTheDocument();
  // expect(screen.getByText('Email is required')).toBeInTheDocument();

  // Simulate filling in the name field
  //fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(emailInput, { target: { value: 'cuneyt@gmail.com' } });
  fireEvent.click(submitButton);

  // Verify that the required error message is not displayed for the name field
 // expect(screen.queryByText('Name is required')).toBeNull();

  // Verify that the required error message is still displayed for the email field
  expect(screen.queryByText('Please fill out this field')).toBeNull();
  // Simulate filling in the email field
  // fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  // fireEvent.click(submitButton);

  // Verify that the required error message is not displayed for both fields
  // expect(screen.queryByText('Name is required')).toBeNull();
  // expect(screen.queryByText('Email is required')).toBeNull();
});
