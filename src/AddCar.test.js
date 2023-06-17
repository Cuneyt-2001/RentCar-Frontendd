import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCar from './AddCar';
import '@testing-library/jest-dom';

 beforeEach(()=>{
     render(<AddCar />);
   });

  test('Test Model is initally empty ', () => {
    
    const inputEl = screen.getByPlaceholderText("Model");
    fireEvent.change(inputEl, { target: { value: '' } });
     expect(inputEl).toHaveValue("");
 
   });

  test('Test Model Input Change', () => {
    
    const inputEl = screen.getByPlaceholderText("Model");
    expect(inputEl).toHaveValue("");
    fireEvent.change(inputEl, { target: { value: 'X5' } });
    expect(inputEl).toHaveValue("X5");
 
  });
