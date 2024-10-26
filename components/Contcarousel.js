// ContinuousCarousel.tsx
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../public/images/awslogo.png";
import logo2 from "../public/images/onetext.png";
import logo3 from "../public/images/atlassian.png";

const ContinuousCarousel = () => {
  return (
    <div className="carousel-bg">
      <div className="w-full overflow-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={0} // Setting interval to 0 for continuous transition
          transitionTime={750} // Smooth continuous transition time
          axis="horizontal"
          showArrows={false}
          swipeable={false}
          emulateTouch={false}
          centerMode={true} // Enable center mode to show 3 images at a time
          centerSlidePercentage={20} // Percentage for each slide, 33.33% for 3 images
          renderIndicator={() => null} // Disable indicators
          selectedItem={0}
          stopOnHover={false} // Prevent the transition from stopping on hover
        >
          {/* 18 images in total */}
          {[...Array(18)].map((_, index) => (
            <div key={index} className="carouselItem">
              <Image
                src={index % 3 === 0 ? logo1 : index % 3 === 1 ? logo2 : logo3}
                alt={`Slide ${index + 1}`}
                className="carouselImage"
                width={100}
                height={100}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContinuousCarousel;
