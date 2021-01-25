import "./Header.css"
import logo from './../../assets/images/logo.svg';

function Header() {
    return (
        <header className="Header">
            <img className="Header__logo" src={logo} alt="" />
            <h1 className="Header__h1">we have ideas to growth your business</h1>
            <a className="Header__a" href="#Main">SEE NOW</a>
        </header>
    );
  }
  
  export default Header;