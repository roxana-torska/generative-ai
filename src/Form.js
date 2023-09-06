import React from 'react';
import { Field, reduxForm } from 'redux-form';
import withStyles from '@material-ui/core/styles/withStyles';
import { SX, Box, Stack, TextField, Button } from '@mui/material';

import asyncValidate from './asyncValidate';
import validate from './validate';

const styles = ({ spacing }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  aside: {
    width: '40%',
    position: 'relative',
    marginRight: spacing(4),

  }
});


const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    label={label}
    error={touched && !!error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      autoComplete='off'
    >
      <Stack spacing={2} direction='row' sx={{
        '& .MuiStack-root': { justifyContent: 'center' },
      }}>
        <Field
          data-testid='first-name-field'
          name='firstName'
          label='First Name'
          component={renderTextField}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <Field
          data-testid='last-name-field'
          name='lastName'
          label='Last Name'
          component={renderTextField}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <Field
          data-testid='email-field'
          name='email'
          label='Email'
          component={renderTextField}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <Field
          data-testid='message-field'
          name='message'
          label='Message'
          multiline
          rows={4}
          component={renderTextField}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button
          data-testid='submit-btn'
          variant='contained'
          type='submit'
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Button
          data-testid='reset-btn'
          variant='outlined'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </Button>
      </Stack>
    </Box>
  );
};

export default reduxForm({
  form: 'Form',
  validate,
  asyncValidate,
})(Form);
