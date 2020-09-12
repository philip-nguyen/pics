import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // to render a list, use a map function
  const images = props.images.map((image) => {
    // highly recommended to use a key value
    return <ImageCard  key={image.id} image={image} />
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;