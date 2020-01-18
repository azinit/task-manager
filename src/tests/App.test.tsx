import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/App/App';

test('renders main title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Список задач/i);
  expect(titleElement).toBeInTheDocument();
});