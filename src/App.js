import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Stack, Typography } from '@mui/material';

import store from './store';
import showResults from './showResults';
import Form from './Form';

const App = () => {
  return (
  <Provider store={store}>
    <Fragment>
        <Stack spacing={2} direction='row'>
          <Typography variant='h2' component='h2'>
            Use Case #8
          </Typography>
        </Stack>
        <Form onSubmit={showResults} />
    </ Fragment>
  </Provider>
  );
};

export default App;
