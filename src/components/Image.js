import React from 'react';


const Image = ({image}) => (
    <div>
        <img src={image.urls.regular} alt="" className='image-item'/>

    </div>

);

export default Image;