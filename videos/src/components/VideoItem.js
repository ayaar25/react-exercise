import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVidSelect }) => {
  
  return (
    <div onClick={() => onVidSelect(video)} className="video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;