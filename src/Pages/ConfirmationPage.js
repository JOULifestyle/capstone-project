import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';

function Confirmation() {
  return (
    <>
    <Header />
      <section className="confirmation-section" aria-label="Confirmation Section">
        <div className="confirmation-page">
          <h1>Reservation Confirmed ✅</h1>
          <p>Thank you for your reservation. We look forward to seeing you!</p>
          <p>However, you are required to pay $10 commitment fee, to guarantee your seat.</p>
  <h2>Kindly proceed to payment</h2>
  <div
  style={{
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    backgroundColor: "#fffbea",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2 style={{ marginBottom: "15px", color: "#2e7d32" }}>
    Try the Little Lemon Demo Payment 🍋
  </h2>

  <p style={{ marginBottom: "10px", color: "#333", lineHeight: "1.6" }}>
    Use the following test card details:
  </p>

  <div
    style={{
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "8px",
      border: "1px dashed #ccc",
      marginBottom: "20px",
      fontSize: "14px",
      color: "#444",
      textAlign: "left",
    }}
  >
    <p><strong>Card Number:</strong> 4242 4242 4242 4242</p>
    <p><strong>Expiry:</strong> Any future date</p>
    <p><strong>CVC:</strong> Any 3 digits</p>
  </div>

  <button
  onClick={() => {
    if (typeof window !== "undefined") {
      window.open(
        "https://buy.stripe.com/test_cNi4gz5NU2TAcoVgMmfEk00",
        "_blank"
      );
    }
  }}
  className="back-home-btn"
>
  Pay Now (Demo)
</button>
</div>


          <Link to="/" className="back-home-btn">Go back to homepage</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Confirmation;
