import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingFormStep2({ setFormData }) {
  const location = useLocation();
  const { bookingIndex, bookingData } = location.state || {};

  // Try to prefill from existing reservation (when editing)
  const all = JSON.parse(localStorage.getItem('reservations') || '[]');
  const existing = bookingIndex !== undefined ? all[bookingIndex] || {} : {};

  const [name, setName] = useState(bookingData?.name ?? existing.name ?? '');
  const [email, setEmail] = useState(bookingData?.email ?? existing.email ?? '');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 1 payload
    const step1Data = JSON.parse(localStorage.getItem('reservationStep1') || '{}');

    const completeReservation = {
      ...existing,     // keep any existing fields (when editing)
      ...step1Data,    // overwrite with latest from Step 1
      name,
      email,
    };

    const prev = JSON.parse(localStorage.getItem('reservations') || '[]');

    if (bookingIndex !== undefined) {
      // Edit existing
      prev[bookingIndex] = completeReservation;
      localStorage.setItem('reservations', JSON.stringify(prev));
      localStorage.removeItem('reservationStep1');
      navigate('/booking-table');            // go back to the table when editing
    } else {
      // New reservation
      prev.push(completeReservation);
      localStorage.setItem('reservations', JSON.stringify(prev));
      localStorage.removeItem('reservationStep1');
      navigate('/confirmation');             // go to confirmation when new
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setFormData?.((prev) => ({ ...prev, name: e.target.value })); //  wire for test
        }}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setFormData?.((prev) => ({ ...prev, email: e.target.value })); //  wire for test
        }}
        placeholder="example@email.com"
        required
      />

      <button type="submit">
        {bookingIndex !== undefined ? 'Update Reservation' : 'Make Your Reservation'}
      </button>
    </form>
  );
}

export default BookingFormStep2;
