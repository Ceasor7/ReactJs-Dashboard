import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PaymentIcon from '@material-ui/icons/Payment';
import ApiIcon from '@material-ui/icons/Code';
import CreditIcon from '@material-ui/icons/AccountBalanceWallet';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    //backgroundColor: '#6A5ACD', // set background color to purple
  },
  icon: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  moduleTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: '#000', // set text color to black
  },
  moduleDescription: {
    marginBottom: theme.spacing(2),
    color: '#000', // set text color to black
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
}));

function ModulesPage() {
  const classes = useStyles();
  const [active, setActive] = useState(true);
  const handleActivateDeactivate = () => {
    setActive(!active);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Modules
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <PaymentIcon className={classes.icon} />
            <Typography
              variant="h6"
              component="h2"
              className={classes.moduleTitle}
            >
              Affiliate Payment
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Affiliate Payment module allows you to manage commission
              payouts to your affiliates with ease.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary">
                Settings
              </Button>
              <Button
                variant="contained"
                color={active ? 'secondary' : 'primary'}
                onClick={handleActivateDeactivate}
              >
                {active ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <ApiIcon className={classes.icon} />
            <Typography
              variant="h6"
              component="h2"
              className={classes.moduleTitle}
            >
              API's
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Affiliate Payment module allows you to manage commission
              payouts to your affiliates with ease.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary">
                Settings
              </Button>
              <Button
                variant="contained"
                color={active ? 'secondary' : 'primary'}
                onClick={handleActivateDeactivate}
              >
                {active ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <CreditIcon className={classes.icon} />
            <Typography
              variant="h6"
              component="h2"
              className={classes.moduleTitle}
            >
              Credit System
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Credit System module allows you to manage credits for your
              customers and offer promotions and discounts.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary">
                Settings
              </Button>
              <Button
                variant="contained"
                color={active ? 'secondary' : 'primary'}
                onClick={handleActivateDeactivate}
              >
                {active ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <WebIcon className={classes.icon} />
            <Typography
              variant="h6"
              component="h2"
              className={classes.moduleTitle}
            >
              Web Hooks
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Affiliate Payment module allows you to manage commission
              payouts to your affiliates with ease.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary">
                Settings
              </Button>
              <Button
                variant="contained"
                color={active ? 'secondary' : 'primary'}
                onClick={handleActivateDeactivate}
              >
                {active ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box textAlign="center">
            <HelpIcon className={classes.icon} />
            <Typography
              variant="h6"
              component="h2"
              className={classes.moduleTitle}
            >
              Help Desk
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Affiliate Payment module allows you to manage commission
              payouts to your affiliates with ease.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary">
                Settings
              </Button>
              <Button
                variant="contained"
                color={active ? 'secondary' : 'primary'}
                onClick={handleActivateDeactivate}
              >
                {active ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ModulesPage;
