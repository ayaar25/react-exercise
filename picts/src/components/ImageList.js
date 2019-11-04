import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // assign key in root component, if there is <div>, then place the key in <div>
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>;
  });
  return <div className="image-list">{images}</div>;
}

export default ImageList;