"use client";

import Image from "next/image";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Fade, Parallax } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";

export default function ImageSlider({ images }: { images: string[] }) {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }),
    new Fade(),
    new Arrow(),
  ];

  return (
    <Flicking renderOnlyVisible={true} circular={true} plugins={plugins}>
      {images.map((image, i) => (
        <div key={i} className="w-96">
          <Image
            src={image}
            alt="image"
            width={500}
            height={300}
            style={{ width: "auto", height: "auto" }}
            className="object-cover aspect-[4/3] rounded-xl"
          />
        </div>
      ))}
      <ViewportSlot>
        <span className="flicking-arrow-prev text-white/20 w-8 h-8"></span>
        <span className="flicking-arrow-next text-white/20 w-8 h-8"></span>
      </ViewportSlot>
    </Flicking>
  );
}
