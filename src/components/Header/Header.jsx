import "./Header.scss";
import logo from "../../assets/Images/BrainFlix-logo.svg";
import upload from "../../assets/Images/upload.svg";

function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="" />
      <div className="header__search">
        <input className="header__input" type="text" placeholder="Search" />
        <button className="header__button header__button--tablet">
          <img className="header__upload" src={upload} />
          <p className="header__button-text">UPLOAD</p>
        </button>
        <div className="header__avatar"></div>
      </div>
      <button className="header__button">
        <img className="header__upload" src={upload} />
        <p className="header__button-text">UPLOAD</p>
      </button>
    </section>
  );
}

export default Header;
