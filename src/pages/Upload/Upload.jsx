import React from "react";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Images/publish.svg";
import "./Upload.scss";

function Upload({ routerProps }) {
  console.log(routerProps);
  const history = routerProps.history;
  const clickHandler = (e) => {
    e.preventDefault();
    alert("Your video has been submited!");
    history.push("/");
  };

  return (
    <section className="upload">
      <h1 className="upload__title">UPLOAD VIDEO</h1>

      <form className="upload__form">
        <div className="upload__desktop-wrapper">

          <div className="upload__image-wrapper">
            <p className="upload__label upload__label--tablet">VIDEO THUMBNAIL</p>
            <img className="upload__image" src={uploadImage} alt="upload icon"></img>
          </div>
          
          <div className="upload__input-wrapper">
            <label className="upload__label upload__label--desktop">TITLE YOUR VIDEO</label>
            <input className="upload__title-input" placeholder="Add a title to your video" />
            <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
            <textarea className="upload__description-input" placeholder="Add a description to your video" />
          </div>
        </div>

        <button className="upload__button-publish" onClick={clickHandler}>
          <img className="upload__icon" src={publishIcon} alt="publish icon"/>
          <p className="upload__button-text">PUBLISH</p>
        </button>

        <div className="upload__wrapper">
          <p className="upload__cancel" onClick={()=>console.log("cancel")}>CANCEL</p>
          <button className="upload__button-publish upload__button-publish--tablet" onClick={clickHandler}>
            <img className="upload__icon" src={publishIcon} alt="publish icon" />
            <p className="upload__button-text">PUBLISH</p>
          </button>
        </div>
        
      </form>
    </section>
  );
}

export default Upload;
