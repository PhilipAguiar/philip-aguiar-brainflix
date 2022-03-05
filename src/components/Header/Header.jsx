import "./Header.scss";
import logo from "../../assets/Images/BrainFlix-logo.svg";
import upload from "../../assets/Images/upload.svg";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  // let history = useHistory();
  return (
    <section className="header">
      <NavLink className='header__home' to="/">
        <img className="header__logo" src={logo} alt="" />
      </NavLink>
      <div className="header__search">
        <input className="header__input" type="text" placeholder="Search" />
        <NavLink className='header__link' to="/upload">
          <button className="header__button header__button--tablet">
            <img className="header__upload" src={upload} />

            <p className="header__button-text">UPLOAD</p>
          </button>
        </NavLink>
        <div className="header__avatar"></div>
      </div>
      {/* <button className="header__button" onClick={() => history.push('/upload')}> */}
      <NavLink className='header__link' to="/upload">
        <button className="header__button">
          <img className="header__upload" src={upload} />
          <p className="header__button-text">UPLOAD</p>
        </button>
      </NavLink>
    </section>
  );
}

export default Header;
