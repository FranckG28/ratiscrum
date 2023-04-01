"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image, { StaticImageData } from "next/image";

export default function ImageSlider({
  images,
}: {
  images: StaticImageData[];
}) {
  const AUTO_SLIDE_INTERVAL = 4000;

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        spacing: 15,
      },
      slideChanged(slider: any) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },

    [
      (slider: any) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, AUTO_SLIDE_INTERVAL);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="navigation-wrapper relative">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-xl shadow border-t border-slate-600/30"
          >
            <Image
              className={`bg-cover bg-center ${loaded ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
              src={image}
              alt="Ratiscrum Logo"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => {
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) => {
              instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  return (
    <button onClick={props.onClick} type="button" disabled={props.disabled}
      className={`
        ${props.disabled
          ? `cursor-default
            bg-gray-200 dark:bg-gray-600
            fill-gray-500 dark:fill-gray-400
          `
          : `cursor-pointer 
            bg-indigo-200 dark:bg-gray-700 
            hover:bg-indigo-300 dark:hover:bg-gray-800
            fill-indigo-800 dark:fill-indigo-200 
            hover:shadow-xl shadow-lg
            hover:scale-105 
          `
        }
          border-gray-100 dark:border-gray-600 
          transition border-t 
          rounded-full p-3.5 
          w-10 h-10 absolute top-1/2 
          ${props.left ? "-left-6" : "-right-6 left-auto"}
        `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  );
}
