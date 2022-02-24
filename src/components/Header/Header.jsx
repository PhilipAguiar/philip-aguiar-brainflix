import "./Header.scss";
import logo from "../../assets/Images/BrainFlix-logo.svg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="" />
      <div className="header__search">
        <input className="header__input" type="text" placeholder="Search"/>
        <div className="header__avatar"></div>
      </div>
      <button className="header__button">UPLOAD</button>
    </section>
  );
}

export default Header;
