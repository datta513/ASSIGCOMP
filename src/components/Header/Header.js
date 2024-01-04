import {Link, Redirect} from 'react-router-dom'
const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <h3>Madelyn Torff</h3>
    </Link>
    <div className="col">
      <Link to="/About" className="k">
        About
      </Link>
      <Link to="/Projects" className="k">
        Projects
      </Link>
      <Link to="/Contscts" className="k">
        Contacts
      </Link>
    </div>
  </nav>
)

export default Header
