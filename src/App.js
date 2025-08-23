import './App.css';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import CustomerDetailsPage from './Pages/CustomerDetailsPage';
import ConfirmationPage from './Pages/ConfirmationPage';
import BookingTable from './Pages/BookingTable';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/customer-details" element={<CustomerDetailsPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/booking-table" element={<BookingTable />} />
      </Routes>
  );
}

export default App;
