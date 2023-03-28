import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  moduleDescription: {
    marginBottom: theme.spacing(2),
    //color: '#000', // set text color to black
  },
  link: {
    marginLeft: theme.spacing(1),
  },
}));

function SettingsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} className={classes.column}>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Business
          </Typography>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Company Information
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.moduleDescription}
            >
              Our Affiliate Payment module allows you to manage commission
              payouts to your affiliates with ease.
            </Typography>
            <Link
              href="/business-information"
              variant="body1"
              className={classes.link}
            >
              Edit
            </Link>
          </div>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Billing Information
            </Typography>
            <Link
              href="/billing-information"
              variant="body1"
              className={classes.link}
            >
              Edit
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.column}>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Team
          </Typography>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Manage Users
            </Typography>
            <Link href="/manage-users" variant="body1" className={classes.link}>
              Edit
            </Link>
          </div>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Permissions
            </Typography>
            <Link href="/permissions" variant="body1" className={classes.link}>
              Edit
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.column}>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Client Portal
          </Typography>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Branding
            </Typography>
            <Link href="/branding" variant="body1" className={classes.link}>
              Edit
            </Link>
          </div>
          <div className={classes.row}>
            <Typography variant="body1" component="p">
              Custom Domain
            </Typography>
            <Link
              href="/custom-domain"
              variant="body1"
              className={classes.link}
            >
              Edit
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingsPage;
