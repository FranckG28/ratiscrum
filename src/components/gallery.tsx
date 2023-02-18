"use client";
import { Photo } from "@/models/photo";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {photos.map((photo, index) => (
        <Zoom key={"zoom" + index}>
          <Image
            width={300}
            height={175}
            key={index}
            src={photo.src}
            alt={photo.description}
            className="rounded-lg shadow aspect-video"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Zoom>
      ))}
    </div>
  );
}
