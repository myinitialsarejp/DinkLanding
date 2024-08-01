import * as React from "react";
import myVideo from "../assets/pickleball.mov";
import dinkLogo from "../assets/dinkLogo.svg";

const VideoLogo = (props) => {
  return (
    <div className="Video-logo">
      <video autoPlay loop muted className="Looped-video">
        <source src={myVideo} type="video/mp4"></source>
      </video>
      <div className="fade-in-logo">
      <img
        src={dinkLogo}
        className='Logo-main'
        alt="Logo"
      />
      </div>
    </div>
  );
};

export default VideoLogo;
