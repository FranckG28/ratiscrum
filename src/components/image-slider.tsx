"use client";

import Image, { StaticImageData } from "next/image";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow, AutoPlay, Fade, Parallax } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default function ImageSlider({ images }: { images: StaticImageData[] }) {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }),
    new Parallax("Image"),
    new Fade(),
    new Arrow(),
  ];

  return (
    <Flicking renderOnlyVisible={true} circular={true} plugins={plugins}>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt="image"
          width={500}
          height={300}
          className="object-cover rounded-xl shadow aspect-[4/3]"
        />
      ))}
      <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next"></span>
      </ViewportSlot>
    </Flicking>
  );
}
