// src/Pages/BookingTable.js
import { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/Header';

function BookingTable() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reservations') || '[]');
    setBookings(stored);
  }, []);

  const handleCancel = (index) => {
    const confirmCancel = window.confirm(
      'Cancelation costs 50% of your commitment fee. Are you sure you want to cancel this reservation?'
    );
    if (!confirmCancel) return;

    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    const confirmEdit = window.confirm(
      'Please note that editing 30 minutes after booking is not valid. Do you want to proceed?'
    );
    if (!confirmEdit) return;

    navigate('/booking-page', {
      state: { bookingIndex: index, bookingData: bookings[index] },
    });
  };

  return (
    <>
    <Header />
      <div className="page-wrapper">
        <section className="booking-table-section" aria-label="Booking Table Section">
          {bookings.length === 0 ? (
            <div className="no-bookings-message">
              <p>No bookings yet.</p>
              <Link to="/booking">
                <button className="booking-button">Reserve a Table</button>
              </Link>
            </div>
          ) : (
            <>
              <div className="booking-header">
                <h2>Your Reservations</h2>
                <Link to="/booking-page">
                  <button className="booking-button">Reserve a Table</button>
                </Link>
              </div>

              {/* Table View for Desktop */}
              <div className="table-container">
                <table className="booking-table desktop-view">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Guests</th>
                      <th>Occasion</th>
                      <th>Note</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b, i) => (
                      <tr key={i}>
                        <td>{b.name}</td>
                        <td>{b.email}</td>
                        <td>{b.date}</td>
                        <td>{b.time}</td>
                        <td>{b.guests}</td>
                        <td>{b.occasion}</td>
                        <td>{b.note}</td>
                        <td>
                          <div className="table-buttons">
                            <button onClick={() => handleEdit(i)}>Edit Booking</button>
                            <button onClick={() => handleCancel(i)}>Cancel Reservation</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Card View for Mobile */}
              <div className="card-bookings mobile-view">
                {bookings.map((b, i) => (
                  <div className="booking-card" key={i}>
                    <p><strong>Name:</strong> {b.name}</p>
                    <p><strong>Email:</strong> {b.email}</p>
                    <p><strong>Date:</strong> {b.date}</p>
                    <p><strong>Time:</strong> {b.time}</p>
                    <p><strong>Guests:</strong> {b.guests}</p>
                    <p><strong>Occasion:</strong> {b.occasion}</p>
                    <p><strong>Note:</strong> {b.note}</p>
                    <div className="table-buttons">
                      <button onClick={() => handleEdit(i)}>Edit Booking</button>
                      <button onClick={() => handleCancel(i)}>Cancel Reservation</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default BookingTable;
