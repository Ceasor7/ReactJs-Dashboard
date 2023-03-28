import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  facebookIcon: {
    color: '#00FF00',
  },
  twitterIcon: {
    color: '#00FF00',
  },
}));

export default function SignupForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="First Name" />
      <TextField id="standard-basic" label="Last Name" />
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Password" />
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <FacebookIcon className={classes.facebookIcon} />
      <TwitterIcon className={classes.twitterIcon} />
      <Link href="#" onClick={() => alert('You clicked me!')}>
        Already have an account? Login here
      </Link>{' '}
      {/* add link */}
    </form>
  );
}
