import React from 'react';
import Image from './Image';

const Images = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, id) => (
        <Image image={image} key={id} />
      ))}
    </div>
  );
};

export default Images;
