import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { TextField } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '50%',
  },
}));

export default function Ticket() {
  const classes = useStyles();
  const [ticketNumber, setTicketNumber] = useState('');
  const [tickets, setTickets] = useState([]);

  const generateTicketNumber = () => {
    const randomNumber = Date.now() + Math.random();
    setTicketNumber(randomNumber);
  };

  const saveTicketNumber = () => {
    // Save ticket number to database
    console.log(`Ticket number ${ticketNumber} saved to database`);
    setTickets([...tickets, { id: tickets.length + 1, ticketNumber }]);
    setTicketNumber('');
  };

  const validateTicketNumber = () => {
    if (ticketNumber === '') {
      return 'Ticket number is required';
    }
    return '';
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="ticket-number"
        label="Ticket Number"
        value={ticketNumber}
        onChange={(event) => setTicketNumber(event.target.value)}
        error={validateTicketNumber() !== ''}
        helperText={validateTicketNumber()}
      />
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={generateTicketNumber}
          className={classes.button}
        >
          Generate Ticket Number
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={saveTicketNumber}
          className={classes.button}
        >
          Save Ticket Number
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Ticket Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.ticketNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
