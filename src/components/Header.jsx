import "./Header.scss";
import logo from "../assets/Images/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="" />
      <input className="header__input" type="text" />
      <img className="header__avatar" src={avatar} alt="" />
      <button className="header__button">UPLOAD</button>
    </section>
  );
}

export default Header;
