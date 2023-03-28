import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../components/Header';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#fff',
    width: '70%',
  },
  quillContainer: {
    width: '70%',
    borderRadius: '20px',
    backgroundColor: '#fff',
    '& .ql-editor': {
      color: 'black',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    width: '100%',
  },

  button: {
    marginLeft: theme.spacing(2),
  },
}));

function AddOrderForm() {
  const classes = useStyles();
  const [formName, setFormName] = useState('');
  const [formDetails, setFormDetails] = useState('');

  const handleFormNameChange = (event) => {
    setFormName(event.target.value);
  };

  const handleFormDetailsChange = (value) => {
    if (value.split(/\s+/).length - 1 <= 800) {
      setFormDetails(value);
    }
  };

  const handleDiscard = () => {
    setFormName('');
    setFormDetails('');
  };

  const handleSave = () => {
    // handle save form logic here
  };

  return (
    <Box m="20px">
      {' '}
      <Header title="ORDERS" subtitle="Adding Order Details" />
      <div className={classes.root}>
        <TextField
          label="Form Name"
          value={formName}
          onChange={handleFormNameChange}
          className={classes.textField}
          variant="outlined"
        />
        <ReactQuill
          value={formDetails}
          onChange={handleFormDetailsChange}
          className={classes.quillContainer}
          row={10}
        />
        <div className={classes.buttonContainer}>
          <Button onClick={handleDiscard} variant="contained">
            Discard
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default AddOrderForm;
