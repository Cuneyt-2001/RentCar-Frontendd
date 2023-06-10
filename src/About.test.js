import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';

beforeEach(()=>{
  render(<About />);
});
test(' Header renders correctly', () => {
  //render(<About />);
  const headerel = screen.getByText("CarsRent!");
  expect(headerel).toBeInTheDocument();
  expect(headerel).toHaveTextContent("CarsRent!")
  expect(headerel).toHaveClass("alert-heading");
});

test(' Header renders correctly', () => {
    //render(<About />);
    const headerel = screen.getByText(/CarsRent/i);
    expect(headerel).toBeInTheDocument();
  });

  test(' Image renders correctly', () => {
    //render(<About />);
    const img = screen.getByTestId("getimg");
    expect(img).toHaveClass("img-fluid");
  });
  
