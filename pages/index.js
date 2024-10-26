"use client";

import exampleImage from "../public/images/img.jpg";

import Image from "next/image";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FlashCard from "../components/FlashCards.js"; // Import the FlashCard component
import ContinuousCarousel from "../components/Contcarousel.js";
import VideoText from "../components/VideoText.js";
import BubbleComponent from "../components/BubbleComponent";
import Contact from "../components/Contact";
import MerchandiseComp from "../components/MerchandiseComp";
import HomePageAbout1 from "../components/HomePageAbout1";
import Cursor from "../components/Cursor.js";

export default function Home() {
  const [cursorClass, setCursorClass] = useState("");

  const hideIt = () => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const aboutContent = [
    {
      name: "IMPETUS",
      text: "IMPETUS is an annual event organized by the Society of Mechanical Engineers at IIEST Shibpur to bring industry and education closer together. The event aims to provide students with practical knowledge and opportunities to interact with industry professionals in mechanical engineering.",
      link: "/about",
      img: "impetus_pic.png",
    },
    {
      name: "INDUSTRY ACADEMIA MEET",
      text: "The industrial meet in IMPETUS fosters productive dialogue between industry and academia, provides exposure to students and academics about current and future industrial trends, and equips them with the skills to be future-proof and industry-ready. It seeks to establish interactive communication between industry leaders, academicians, and students, bridging the gap between the company and the institute and offering a comprehensive understanding of their needs.",
      link: "/industryacademiameet",
      img: "pic_1.png",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box>
      <div
        className={`min-h-screen flex flex-col justify-center items-center bg-black ${cursorClass}`}
        onMouseEnter={() => setCursorClass("")}
      >
        <div
          className="custom-cursor"
          style={{
            cursor: "none",
            position: "fixed",
            pointerEvents: "none",
            zIndex: 1000,
            transform: "translate(-50%, -50%)",
            transition:
              "transform 0.1s ease-out, background-color 0.3s, border 0.3s",
          }}
        >
          <div
            className="custom-cursor-circle"
            style={{
              position: "absolute",
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              border: "2px solid rgba(255, 165, 0, 0.7)",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        {/* Main container */}
        <div className="w-full max-w-7xl p-6">
          {/* Second Division with Image */}
          {/* <div
          className="img-bg"
          onMouseEnter={() => setCursorClass("image-hover")}
          onMouseLeave={() => setCursorClass("")}
        >
          <h2 className="text-xl font-bold mb-4">Image Division</h2>
          <div className="flex justify-center items-center">
            <Image
              src={exampleImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Example"
              width={400}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        </div> */}

          <VideoText hideIt={hideIt} />
          <BubbleComponent />

          <ContinuousCarousel />

          {/* Our Partners Division */}
          <div className="our-partners-container mt-12">
            <h2 className="our-partners-heading">Our Partners</h2>
            <hr className="divider" />
            <p className="our-partners-paragraph">
              We are proud to collaborate with some of the industry's leading
              companies. Our partnerships drive innovation and help deliver the
              best solutions to our clients worldwide.
            </p>
          </div>

          {/* FlashCards Division */}
          <div className="flex justify-center flex-wrap mt-8">
            <FlashCard frontContent="Card 1 Front" backContent="Card 1 Back" />
            <FlashCard frontContent="Card 2 Front" backContent="Card 2 Back" />
            <FlashCard frontContent="Card 3 Front" backContent="Card 3 Back" />
            {/* Add more FlashCard components as needed */}
          </div>

          <MerchandiseComp />
          {aboutContent.map((el) => (
            <HomePageAbout1 key={el.name} {...el} />
          ))}
          <Contact />
        </div>
      </div>
    </Box>
  );
}
