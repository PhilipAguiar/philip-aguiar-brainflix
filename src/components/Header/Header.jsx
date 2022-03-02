import "./Header.scss";
import logo from "../../assets/Images/BrainFlix-logo.svg";
import upload from "../../assets/Images/upload.svg";
import { Link, useHistory } from "react-router-dom";

function Header() {
  // let history = useHistory();
  return (
    <section className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <div className="header__search">
        <input className="header__input" type="text" placeholder="Search" />
        <Link to="/upload">
          <button className="header__button header__button--tablet">
            <img className="header__upload" src={upload} />

            <p className="header__button-text">UPLOAD</p>
          </button>
        </Link>
        <div className="header__avatar"></div>
      </div>
      {/* <button className="header__button" onClick={() => history.push('/upload')}> */}
      <Link to="/upload">
        <button className="header__button">
          <img className="header__upload" src={upload} />
          <p className="header__button-text">UPLOAD</p>
        </button>
      </Link>
    </section>
  );
}

export default Header;
