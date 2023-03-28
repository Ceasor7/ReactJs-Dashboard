import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: tokens(theme.palette.mode),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: tokens(theme.palette.mode),
  },
}));

function PaymentIntegrationPage() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePaypalClick = () => {
    // handle Paypal payment integration
    window.location.href = 'https://www.paypal.com/';
  };

  const handleStripeClick = () => {
    // handle Stripe payment integration
    window.location.href = 'https://stripe.com/';
  };

  const handleManualClick = () => {
    // handle manual payment integration
    const amount = document.getElementById('manual-payment-amount').value;
    window.alert(`Manual payment of ${amount} has been submitted.`);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Payment Integration
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Paypal" />
          <Tab label="Stripe" />
          <Tab label="Manual" />
        </Tabs>
        {tabValue === 0 && (
          <div>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Paypal is an online payment system that allows users to make and
              receive payments globally. It offers a fast, secure, and easy way
              to transfer money without disclosing personal information to the
              recipient.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handlePaypalClick}
            >
              Pay with Paypal
            </Button>
          </div>
        )}
        {tabValue === 1 && (
          <div>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Stripe is an online payment processing platform that enables
              businesses to accept payments securely and easily. It offers a
              suite of APIs and tools that businesses can use to manage
              payments, subscriptions, and billing.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleStripeClick}
            >
              Pay with Stripe
            </Button>
          </div>
        )}
        {tabValue === 2 && (
          <div>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Manual payment option allows you to pay manually by transferring
              the money directly to the seller's bank account or through another
              payment method agreed upon by both parties.
            </Typography>
            <br />
            <TextField id="manual-payment-amount" label="Amount" />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleManualClick}
            >
              Pay manually
            </Button>
          </div>
        )}
      </Paper>
    </div>
  );
}

export default PaymentIntegrationPage;
