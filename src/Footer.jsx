function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h2>🪔 Festival Explorer</h2>

          <p>
            Discover the beauty of Indian culture,
            traditions and celebrations.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://github.com/" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gujarat">Gujarat Festivals</a></li>
            <li><a href="#national">National Festivals</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#media">Media</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          © 2026 Festival Explorer |
          Made with ❤️ using React.js
        </p>
      </div>

    </footer>
  );
}

export default Footer;
