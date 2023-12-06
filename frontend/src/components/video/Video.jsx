import React from 'react';
import './video.css';

const Video= () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/assets/SONG.mp4"  />
      
      </video>
    </div>
  );
};
export default Video;
