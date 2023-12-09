"use client";

import Image, { StaticImageData } from "next/image";
import Flicking from "@egjs/react-flicking";

export default function ImageSlider({ images }: { images: StaticImageData[] }) {
  return (
    <Flicking>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt="image"
          width={500}
          height={500}
          className="object-cover rounded-xl shadow"
        />
      ))}
    </Flicking>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`bg-gray-200 dark:bg-gray-700 transition border-t hover:scale-105 border-gray-100 dark:border-gray-600 hover:shadow-xl shadow-lg rounded-full p-3.5 w-10 h-10 absolute top-1/2 fill-slate-800 dark:fill-slate-200 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 ${
        props.left ? "-left-6" : "-right-6 left-auto"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
