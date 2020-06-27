import React from 'react';

const ImageGalleryItem = ({imageLink, largeImageUrl, webformatWidth, webformatHeight}) => {
  return (
    <li className="ImageGalleryItem">
      <img data-img={largeImageUrl} 
           src={imageLink} 
           alt="" className="ImageGalleryItem-image" 
           width={webformatWidth} 
           height={webformatHeight}/>
    </li>
  );
};

export default ImageGalleryItem;
