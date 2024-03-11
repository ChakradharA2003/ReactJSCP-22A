// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="nav-image"
      />
      <h1 className="nav-heading">Wave</h1>
    </div>
    <ul className="nav-options-container">
      <li>
        <Link to="/" className="nav-option">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-option">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-option">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
