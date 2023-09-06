import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('Check form fields', () => {
  const { getByTestId, getByText} = render(<App />);

  expect(getByText('Use Case #8')).toBeInTheDocument();

  expect(getByTestId('first-name-field')).toBeInTheDocument();
  expect(getByTestId('first-name-field')).toBeEnabled();

  expect(getByTestId('last-name-field')).toBeInTheDocument();
  expect(getByTestId('last-name-field')).toBeEnabled();

  expect(getByTestId('email-field')).toBeInTheDocument();
  expect(getByTestId('email-field')).toBeEnabled();

  expect(getByTestId('message-field')).toBeInTheDocument();
  expect(getByTestId('message-field')).toBeEnabled();

  expect(getByTestId('submit-btn')).toBeInTheDocument();
  expect(getByTestId('submit-btn')).toBeDisabled();
  expect(getByTestId('submit-btn')).toHaveTextContent('Submit');

  expect(getByTestId('reset-btn')).toBeInTheDocument();
  expect(getByTestId('reset-btn')).toBeDisabled();
  expect(getByTestId('reset-btn')).toHaveTextContent('Clear Values');
});