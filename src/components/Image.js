import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.regular}
        alt={image.user.name}
        key={image.id}
        className="image-item"
      />
    </div>
  );
};

export default Image;
