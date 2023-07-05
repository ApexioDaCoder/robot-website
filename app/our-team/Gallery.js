import * as BaseGallery from 'react-photo-gallery';
import { photos } from './photos';
import { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';
import NextJsImage from './NextJsImage';

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, onClick }) => {
      return (
        <Image
          key={key}
          src={photo}
          className="m-[2px] cursor-pointer hover-target rounded"
          onClick={(e) => onClick(e, { index })}
        />
      );
    }
  );

  return (
    <div>
      <BaseGallery.default
        photos={photos}
        onClick={openLightbox}
        renderImage={imageRenderer}
      />
      <Lightbox
        open={viewerIsOpen}
        index={currentImage}
        close={closeLightbox}
        slides={photos.map((photo) => {
          return { src: photo.src };
        })}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};
