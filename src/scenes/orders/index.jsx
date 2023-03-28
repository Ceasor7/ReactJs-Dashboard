import { Box, Button, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataOrders } from '../../data/mockData';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/addOrder');
  }
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'OrderStatus',
      headerName: 'Order Status',
      flex: 1,
      renderCell: ({ row: { OrderStatus } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              OrderStatus === 'admin'
                ? colors.greenAccent[600]
                : OrderStatus === 'manager'
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {OrderStatus === 'Working' && <HourglassBottomOutlinedIcon />}
            {OrderStatus === 'Pending' && <PendingActionsOutlinedIcon />}
            {OrderStatus === 'In Review' && <RateReviewOutlinedIcon />}
            {OrderStatus === 'Completed' && <DoneAllOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {OrderStatus}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Managing Orders" />
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
        <Box display="flex" justifyContent="end" mt="20px">
          <Button onClick={handleClick} color="secondary" variant="contained">
            Create New Order
          </Button>
        </Box>
        <DataGrid
          sx={{ marginTop: '20px' }}
          checkboxSelection
          rows={mockDataOrders}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
