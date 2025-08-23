// src/component/BookingFormStep1.js
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingFormStep1({ availableTimes = [], dispatch, setFormData }) {
  const location = useLocation();
  const { bookingIndex, bookingData } = location.state || {};

  const [date, setDate] = useState(bookingData?.date || '');
  const [time, setTime] = useState(bookingData?.time || '');
  const [guests, setGuests] = useState(bookingData?.guests || 1);
  const [occasion, setOccasion] = useState(bookingData?.occasion || 'none');
  const [note, setNote] = useState(bookingData?.note || '');

  const [errors, setErrors] = useState({});

  const validate = () => {
  const newErrors = {};
  if (!date) newErrors.date = "Please select a date";
  if (!time) newErrors.time = "Please select a time";
  if (!guests || guests < 1) newErrors.guests = "Enter at least 1 guest";
  return newErrors;
};

  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  // When editing, immediately load times for the booking's date
  useEffect(() => {
    if (bookingData?.date) {
      dispatch?.({ type: 'update', date: bookingData.date });
    }
  }, [bookingData?.date, dispatch]);

  // Filter available times
  const filteredTimes = useMemo(() => {
    if (!date) return availableTimes;

    const now = new Date();
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');

    return (availableTimes || []).filter((t) => {
      if (bookingIndex !== undefined && bookingData?.time === t) return true;
      const isBooked = reservations.some(
        (r, i) => r.date === date && r.time === t && i !== bookingIndex
      );
      if (isBooked) return false;
      if (date === today) {
        const [h, m] = t.split(':').map(Number);
        const slot = new Date();
        slot.setHours(h, m, 0, 0);
        if (slot <= now) return false;
      }
      return true;
    });
  }, [availableTimes, date, bookingIndex, bookingData?.time, today]);

  // Clear invalid time if needed
  useEffect(() => {
    if (bookingIndex !== undefined) return;
    if (time && !filteredTimes.includes(time)) setTime('');
  }, [date, filteredTimes, time, bookingIndex]);

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return; // stop submission
  }
  setErrors({});
  const formStep1 = { date, time, guests, occasion, note };
  localStorage.setItem("reservationStep1", JSON.stringify(formStep1));
  navigate("/customer-details", { state: { bookingIndex, bookingData } });
};


  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={date}
        min={today}
        onChange={(e) => {
          const selected = e.target.value;
          setDate(selected);
          setFormData?.((prev) => ({ ...prev, date: selected }));
          dispatch?.({ type: 'update', date: selected });
        }}
        required
      />
      {errors.date && <p className="text-red-500">{errors.date}</p>}

      <label htmlFor="res-time">Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setFormData?.((prev) => ({ ...prev, time: e.target.value }));
        }}
        required
      >
        {errors.time && <p className="text-red-500">{errors.time}</p>}
        <option value="">Select time</option>
        {filteredTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        min="1"
        max="20"
        onChange={(e) => {
          setGuests(e.target.value);
          setFormData?.((prev) => ({ ...prev, guests: e.target.value }));
        }}
        required
      />
      {errors.guests && <p className="text-red-500">{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
          setFormData?.((prev) => ({ ...prev, occasion: e.target.value }));
        }}
      >
        <option value="none">Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="note">Short Note</label>
      <textarea
        id="note"
        value={note}
        placeholder="Add a short note..."
        onChange={(e) => {
          setNote(e.target.value);
          setFormData?.((prev) => ({ ...prev, note: e.target.value }));
        }}
      />

      <button type="submit">Proceed</button>
    </form>
  );
}

export default BookingFormStep1;
