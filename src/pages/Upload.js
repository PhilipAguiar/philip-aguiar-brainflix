import React from "react";
import uploadImage from '../assets/Images/Upload-video-preview.jpg'

function Upload() {
  return (
    <section>
      <h1>UPLOAD VIDEO</h1>
      <p>VIDEO THUMBNAIL</p>
      <img src={uploadImage}></img>
      <form>
        <label>TITLE YOUR VIDEO</label>
        <input></input>
        <label>TITLE YOUR VIDEO</label>
        <textarea></textarea>
        <button></button>

        <h4>Cancel</h4>

      </form>
    </section>
  );
}

export default Upload;
