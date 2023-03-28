import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Boarding from './scenes/boarding';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Clients from './scenes/clients';
import AddUser from './scenes/clients/addUser';
import Uploads from './scenes/uploads';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar/calendar';
import Orders from './scenes/orders';
import Neworder from './scenes/orders/newOrder';
import Addorder from './scenes/orders/addOrder';
import Coupons from './scenes/coupons';
import SignupForm from './scenes/signup';
import Subscribers from './scenes/subscribers';
import Tickets from './scenes/tickets';
import Intergrations from './scenes/intergrations';
import Modules from './scenes/modules';
import Settings from './scenes/settings';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="context">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="boarding" element={<Boarding />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/newOrder" element={<Neworder />} />
              <Route path="/addOrder" element={<Addorder />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/uploads" element={<Uploads />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/coupons" element={<Coupons />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/form" element={<Form />} />
              <Route path="/intergrations" element={<Intergrations />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="signup" element={<SignupForm />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
