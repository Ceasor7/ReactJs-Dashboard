import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function InvoiceGenerator() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { name: '', total: 0, quantity: 0 }]);
  };

  const handleItemChange = (index) => (event) => {
    const newItems = [...items];
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        label="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        label="Invoice Date"
        value={invoiceDate}
        onChange={(event) => setInvoiceDate(event.target.value)}
        sx={{ m: 1, width: '50ch' }}
      />
      <Button variant="contained" onClick={addItem}>
        Add Item
      </Button>

      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            sx={{ m: 1, width: '50ch' }}
          />
          <TextField
            label="Total"
            name="total"
            type="number"
            value={item.total}
            onChange={handleItemChange(index)}
            sx={{ m: 1, width: '50ch' }}
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={item.quantity}
            onChange={handleItemChange(index)}
            sx={{ m: 1, width: '50ch' }}
          />
        </div>
      ))}
    </div>
  );
}

export default InvoiceGenerator;
