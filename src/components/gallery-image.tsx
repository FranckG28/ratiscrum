import Link from "next/link";
import Image from "next/image";
import React from "react";

export default React.forwardRef(function GalleryImage(
  {
    src,
    alt,
  }: {
    src: string;
    alt: string;
  },
  ref
) {
  return (
    <Link
      className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight mb-4"
      href={src}
      shallow
    >
      <Image
        src={src}
        alt={alt}
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 aspect-[1.5]"
        style={{ transform: "translate3d(0, 0, 0)", objectFit: "cover" }}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
      />
    </Link>
  );
});
