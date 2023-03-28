import React from "react";
import { GridLab3 } from "../AcademicPage/GridLab4";
import "../../style/GalleryPage/gallerySection.css";
import { GalleryData, GalleryData1, GalleryData2, GalleryData3, GalleryData4 } from "../../utils/GalleryData";

function GallerySection() {
  return (
    <div className="gallerySection m-5">
      <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
        {GalleryData.map((item) => (
          <GridLab3 key={item.label} item={item} />
        ))}
      </section>
      <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
        {GalleryData1.map((item) => (
          <GridLab3 key={item.label} item={item} />
        ))}
      </section>
      <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
        {GalleryData2.map((item) => (
          <GridLab3 key={item.label} item={item} />
        ))}
      </section>
      <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
        {GalleryData3.map((item) => (
          <GridLab3 key={item.label} item={item} />
        ))}
      </section>
      <section className="flex items-center justify-around flex-col md:flex-row gap-5 mt-4">
        {GalleryData4.map((item) => (
          <GridLab3 key={item.label} item={item} />
        ))}
      </section>
    
    </div>
    
  );
}

export default GallerySection;
