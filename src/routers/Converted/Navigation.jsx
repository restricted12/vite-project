import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li><Link to="/mac">MAC</Link></li>
      <li><Link to="/iphone" className="d-none d-md-block">IPHONE</Link></li>
      <li><Link to="/ipad">IPAD</Link></li>
      <li><Link to="/tv" className="d-none d-md-block">TV</Link></li>
      <li><Link to="/watch">WATCH</Link></li>
      <li><Link to="/music" className="d-none d-md-block">MUSIC</Link></li>
      <li><Link to="/services">SERVICES</Link></li>
      <li>
        <Link to="/search">
          <img src="img/icons/search-icon.png" alt="Search" className="d-none d-md-block" />
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
