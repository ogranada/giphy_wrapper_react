import logo from './logo.svg';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <img
        className="Header-logo"
        src={logo}
        alt="Logo"
      />
    </header>
  );
}

export default Header;
