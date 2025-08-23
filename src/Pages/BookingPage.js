// src/Pages/BookingPage.js
import Footer from '../component/Footer';
import BookingFormStep1 from '../component/BookingFormStep1';
import MobileCarousel from '../component/MobileCarousel';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../component/Main';
import Header from '../component/Header';

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Header />
      <section className="booking-section">
        <div className="booking-container">
          <div className="left-content">
            <h1>Reserve a Table</h1>
            <p>Make a reservation for your special event or just a night out. We’ll make it memorable!</p>

            <div className="image-group desktop-only">
              <img src="restaurant.jpg" alt="restaurant" />
              <img src="restaurant chef B.jpg" alt="restaurant chef" />
            </div>

            <div className="mobile-carousel mobile-only">
              <MobileCarousel />
            </div>
          </div>

          <div className="form-container">
            <BookingFormStep1 availableTimes={availableTimes} dispatch={dispatch} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingPage;
