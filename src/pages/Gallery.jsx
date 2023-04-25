import React from 'react';
import loadable from '@loadable/component'


const GallerySection = loadable(() => import('../components/GalleryPage/GallerySection'))
const GalleryHeader = loadable(() => import('../components/GalleryPage/GalleryHeader'))


function Gallery() {
  return (
    <>  
        <GalleryHeader />
        <GallerySection />
    </>
  )
}

export default Gallery