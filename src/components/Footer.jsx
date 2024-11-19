import "../../src/components/styles/footer.css"; // Import your custom CSS
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import logo_bw from "../assets/logo_bw.png"; // Logo import

const Footer = () => {
  return (
    <section className="relative z-10">
     
      <hr className="custom-hr w-auto mb-10"></hr>
      <footer className="footer relative">
        <div className="container mx-auto">
          <div className="footer-row">
            {/* Company Section */}
            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>
                  {" "}
                  <Link to="/terms-of-use" className="footer-link">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Help Section */}
            <div className="footer-col">
              <h4 className="footer-heading">Get Help</h4>
              <ul className="footer-list">
                <li>
                  {" "}
                  <Link to="/footer-faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div className="footer-col">
              <h4 className="footer-heading">Address</h4>
              <ul className="footer-list">
                <li>
                  <a href="#" className="footer-link">
                    512, Pyramid Axis,
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Baner, Pune.
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Maharashtra, India 411045
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    info@candidHR.ai
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="footer-col relative z-10">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-links">
                <Link
                  to="https://www.facebook.com/profile.php?id=61565655770371&mibextid=ZbWKwL"
                  target="_blank"
                  className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="https://x.com/candidhr_ai?t=YdzOk6-7Wori3Mcf0png7Q&s=09"
                  target="_blank"
                  className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/candidhr.ai?igsh=MTlxMXNhZnoxa3A5eA"
                  target="_blank"
                  className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/candidhrai/?viewAsMember=true"
                  target="_blank"
                  className="social-icon bg-gradient-to-b from-[#7076F2] to-[#ba83ece8]"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logo in the bottom-left corner */}
        <img src={logo_bw} alt="Logo" className="footer-logo" />
      </footer>
    </section>
  );
};

export default Footer;
