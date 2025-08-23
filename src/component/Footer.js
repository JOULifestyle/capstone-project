function Footer() {
  return (
    <footer className="footer">
      <section className="footer-col footer-logo-section">
        <img src="Little lemon darkmode.png" alt="Little Lemon Logo" className="footer-logo" />
      </section>

      <section className="footer-col">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/booking-page">Reservations</a></li>
        </ul>
      </section>

      <section className="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Main Street, Chicago</li>
          <li>Phone: +1 234 567 890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </section>

      <section className="footer-col">
        <h3>Social Media</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </section>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Little Lemon.
      </div>
    </footer>
  );
}

export default Footer;
