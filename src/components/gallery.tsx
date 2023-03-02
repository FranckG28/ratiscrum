"use client";
import Image, { StaticImageData } from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full h-52">
      {images.map((photo, index) => (
        <Zoom key={"zoom" + index}>
          <Image
            fill
            key={index}
            src={photo.src}
            alt={"Photo " + index}
            className="rounded-lg shadow aspect-video"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Zoom>
      ))}
    </div>
  );
}
