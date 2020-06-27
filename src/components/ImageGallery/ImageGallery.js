import React from 'react';

import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images, onClick}) => {
  return (
    <ul onClick={onClick}  className="ImageGallery">
      {images.map(({webformatURL, largeImageURL, webformatWidth, webformatHeight, id}) => 
        <ImageGalleryItem 
          largeImageUrl={largeImageURL}
          imageLink={webformatURL}
          webformatWidth={webformatWidth}
          webformatHeight={webformatHeight}
          key={id} 
        />)}
    </ul>
  )
}

export default ImageGallery;