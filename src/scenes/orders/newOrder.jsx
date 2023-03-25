import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../../components/Header';

const StyledBox = styled(Box)({
  display: 'flex',
  width: '70%',
  flexDirection: 'column',
  alignItems: 'center',
  '& > :not(style)': {
    m: 16,
    width: '100ch',
  },
});

const StyledButton = styled(Button)({
  marginTop: '10px',
  width: '70vh',
  height: 'inherit',
  borderRadius: '5px',
  padding: '5px',
  margin: '8px',
});

function UserDetailsForm() {
  return (
    <StyledBox component="form">
      <Header title="ADD ORDERS" subtitle="Add Orders from Here" />
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email Address" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
      <StyledButton variant="contained">Submit</StyledButton>
    </StyledBox>
  );
}

export default UserDetailsForm;
