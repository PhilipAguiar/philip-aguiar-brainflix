import React from "react";
import { NavLink } from "react-router-dom";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Images/publish.svg";
import "./Upload.scss";
function Upload() {
  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD VIDEO</h1>
      <p className="upload__label upload__label--tablet">VIDEO THUMBNAIL</p>
      <img className="upload__image" src={uploadImage}></img>
      <form className="upload__form">
        <label className="upload__label">TITLE YOUR VIDEO</label>
        <input className="upload__title-input" placeholder="Add a title to your video" />
        <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
        <textarea className="upload__description-input" placeholder="Add a description to your video" />
        <button className="upload__button-publish">
          <img className="upload__icon" src={publishIcon} />
          <p className="upload__button-text">PUBLISH</p>
        </button>
        <div className="upload__wrapper">
          <p className="upload__cancel">CANCEL</p>
          <button className="upload__button-publish upload__button-publish--tablet">
            <img className="upload__icon" src={publishIcon} />
            <p className="upload__button-text">PUBLISH</p>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Upload;
