import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../../components/Header';

function CouponGenerator() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [couponCode, setCouponCode] = useState('');
  const [discountPrice, setDiscountPrice] = useState(0);
  const [coupons, setCoupons] = useState([]);

  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCouponCode(result);
    setDiscountPrice(Math.floor(Math.random() * 100));
  };

  const saveCouponToDatabase = () => {
    // Save coupon number and discount amount to database
    console.log(
      `Coupon ${couponCode} saved with discount price ${discountPrice}`
    );
    setCoupons([
      ...coupons,
      { id: coupons.length + 1, couponCode, discountPrice },
    ]);
  };

  const handleDeleteCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  const handleEditCoupon = (id) => {
    // Edit coupon with specified ID
    console.log(`Editing coupon with ID ${id}`);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'couponCode', headerName: 'Coupon Code', width: 200 },
    { field: 'discountPrice', headerName: 'Discount Price', width: 200 },
    {
      field: 'Delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleDeleteCoupon(params.row.id)}>
            <DeleteIcon />
          </Button>
        </>
      ),
    },
    {
      field: 'Edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditCoupon(params.row.id)}>
            <EditIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Header title="COUPONS" subtitle="Create, Delete and See your Coupons" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
        }}
      >
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <Button variant="contained" onClick={generateCouponCode}>
            Generate Coupon Code
          </Button>
          <TextField label="Coupon Code" value={couponCode} />
          <TextField label="Discount Price" value={discountPrice} />
          <Button variant="contained" onClick={saveCouponToDatabase}>
            Save Coupon
          </Button>

          <DataGrid
            rows={coupons}
            columns={columns}
            pageSize={5}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </div>
    </div>
  );
}

export default CouponGenerator;
