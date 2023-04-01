"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "react-medium-image-zoom/dist/styles.css";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      {images.map((photo, index) => (
        <Link
          key={photo.src}
          className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight mb-4"
          href={photo.src}
          shallow
        >
          <Image
            src={photo.src}
            alt={"Photo " + index}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 aspect-[1.5]"
            style={{ transform: 'translate3d(0, 0, 0)', objectFit: 'cover' }}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
          />
        </Link>
      ))}
    </div>
  );
}
