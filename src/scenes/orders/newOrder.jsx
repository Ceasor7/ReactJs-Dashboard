import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  addButton: {
    marginBottom: theme.spacing(2),
  },
}));

function OrderForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [orders] = useState([
    { id: 1, customer: 'John Doe', item: 'Product A', quantity: 2 },
    { id: 2, customer: 'Jane Smith', item: 'Product B', quantity: 1 },
    { id: 3, customer: 'Bob Johnson', item: 'Product C', quantity: 3 },
  ]);

  const handleAddOrder = () => {
    navigate('/addOrder');
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={handleAddOrder}
        variant="contained"
        color="primary"
        className={classes.addButton}
      >
        Add Order
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Orders">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="center">{order.customer}</TableCell>
                <TableCell align="center">{order.item}</TableCell>
                <TableCell align="center">{order.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrderForm;
