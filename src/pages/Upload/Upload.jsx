import "./Upload.scss";
import { Component, createRef } from "react";
import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../../assets/Images/publish.svg";
import apiUtils from "../../utils/api";

class Upload extends Component {
  state = {
    titleError: false,
    descriptionError: false,
  };

  render() {
    const { routerProps } = this.props;
    const history = routerProps.history;
    const titleRef = createRef();
    const descriptionRef = createRef();

    // submit new video
    const submitHandler = (e) => {
      e.preventDefault();
      if (titleRef.current.value === "") {
        this.setState({
          titleError: true,
          descriptionError: false,
        });
      } else if (descriptionRef.current.value === "") {
        this.setState({
          titleError: false,
          descriptionError: true,
        });
      } else if (titleRef.current.value === "" && descriptionRef.current.value === "") {
        this.setState({
          titleError: true,
          descriptionError: true,
        });
      } else {
        apiUtils.postVideo(titleRef.current.value, descriptionRef.current.value);
        alert("Your video has been submitted!");
        history.push("/");
      }
    };

    // reset fields

    const clickHandler = () => {
      titleRef.current.value = "";
      descriptionRef.current.value = "";
    };

    return (
      <section className="upload" onSubmit={submitHandler}>
        <h1 className="upload__title">UPLOAD VIDEO</h1>

        <form className="upload__form">
          <div className="upload__desktop-wrapper">
            <div className="upload__image-wrapper">
              <p className="upload__label upload__label--tablet">VIDEO THUMBNAIL</p>
              <img className="upload__image" src={thumbnailImage} alt="upload icon"></img>
            </div>

            <div className="upload__input-wrapper">
              <label className="upload__label upload__label--desktop">TITLE YOUR VIDEO</label>
              {this.state.titleError ? (
                <input
                  className="upload__title-input upload__title-input--error"
                  ref={titleRef}
                  placeholder="Add a title to your video"
                  name="title"
                />
              ) : (
                <input className="upload__title-input" ref={titleRef} placeholder="Add a title to your video" name="title" />
              )}

              <label className="upload__label">ADD A VIDEO DESCRIPTION</label>

              {this.state.descriptionError ? (
                <textarea
                  className="upload__description-input upload__description-input--error"
                  ref={descriptionRef}
                  placeholder="Add a description to your video"
                  name="description"
                />
              ) : (
                <textarea
                  className="upload__description-input"
                  ref={descriptionRef}
                  placeholder="Add a description to your video"
                  name="description"
                />
              )}
            </div>
          </div>

          <button className="upload__button-publish">
            <img className="upload__icon" src={publishIcon} alt="publish icon" />
            <p className="upload__button-text">PUBLISH</p>
          </button>

          <div className="upload__wrapper">
            <p className="upload__cancel" onClick={clickHandler}>
              CANCEL
            </p>
            <button className="upload__button-publish upload__button-publish--tablet">
              <img className="upload__icon" src={publishIcon} alt="publish icon" />
              <p className="upload__button-text">PUBLISH</p>
            </button>
          </div>
        </form>
      </section>
    );
  }
}
export default Upload;
