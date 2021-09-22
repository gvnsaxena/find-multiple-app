import { render } from '@testing-library/react';
import App from '../App';

it('should render and match the snapshot', () => {
  const {
    container: { firstChild },
  } = render(<App/>);
  expect(firstChild).toMatchSnapshot();
});