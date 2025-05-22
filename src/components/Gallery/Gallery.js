import React, { useState } from 'react';
import './Gallery.css';
import externalImage from '../../img/gallery/external.jpeg';
import internalImage from '../../img/gallery/internal.jpeg';
import ceramicImage from '../../img/gallery/ceramic.jpeg';
import ppfImage from '../../img/gallery/ppf.jpeg';
import bayImage from '../../img/gallery/bay.jpeg';
import fullyImage from '../../img/gallery/fully.jpeg';
import headlightImage from '../../img/gallery/headlight.jpeg';
import leatherImage from '../../img/gallery/leather.jpeg';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  
  const initialImages = [
    {
      id: 1,
      src: externalImage,
      alt: 'Before and after car detailing',
      title: 'Exterior Detailing'
    },
    {
      id: 2,
      src: internalImage,
      alt: 'Interior cleaning result',
      title: 'Interior Detailing'
    },
    {
      id: 3,
      src: ceramicImage,
      alt: 'Ceramic coating',
      title: 'Ceramic Coating'
    }
  ];
  
  const additionalImages = [
    {
      id: 4,
      src: ppfImage,
      alt: 'Paint Protection Film',
      title: 'Paint Protection Film'
    },
    {
      id: 5,
      src: bayImage,
      alt: 'Engine bay cleaning',
      title: 'Engine Bay Cleaning'
    },
    {
      id: 6,
      src: headlightImage,
      alt: 'Headlight restoration',
      title: 'Headlight Restoration'
    },
    {
      id: 7,
      src: leatherImage,
      alt: 'Leather conditioning',
      title: 'Leather Conditioning'
    },
    {
      id: 8,
      src: fullyImage,
      alt: 'Full car detailing',
      title: 'Complete Detail'
    }
  ];
  
  // Combine initial and additional images based on showAll state
  const displayImages = showAll 
    ? [...initialImages, ...additionalImages] 
    : initialImages;
  
  return (
    <section className="gallery section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid grid">
          {displayImages.map(image => (
            <div className="gallery-item" key={image.id}>
              <img src={image.src} alt={image.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="btn btn-secondary" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default Gallery;