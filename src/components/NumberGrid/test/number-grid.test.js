import { screen, render } from '@testing-library/react';
import NumberGrid from '../number-grid';

it('should render and match the snapshot', () => {
  const {
    container: { firstChild },
  } = render(<NumberGrid startCount='1' endCount='10'
    clickHandler={jest.fn()} findMultiplesOfNumbers={jest.fn().mockImplementation(()=> true)}/>);
  expect(firstChild).toMatchSnapshot();
});

it('should render Number grid with 10 box, aria-label and highlighted Class', () => {
    render(<NumberGrid startCount='1' endCount='10'
      clickHandler={jest.fn()} findMultiplesOfNumbers={jest.fn().mockImplementation(()=> true)}/>);
      expect(screen.getByText(10).textContent).toEqual('10');
      expect(screen.getByText(10).getAttribute('aria-label')).toEqual('Click Number 10');
      expect(screen.getByText(10).className).toEqual('number-box highlight-number');
  });

  it('should render Number grid with 130 box, aria-label and without Highlighted class', () => {
    render(<NumberGrid startCount='1' endCount='130'
      clickHandler={jest.fn()} findMultiplesOfNumbers={jest.fn().mockImplementation(()=> false)}/>);
      expect(screen.getByText(130).textContent).toEqual('130');
      expect(screen.getByText(130).getAttribute('aria-label')).toEqual('Click Number 130');
      expect(screen.getByText(130).className).toEqual('number-box ');
  });