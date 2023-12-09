import Image, { StaticImageData } from "next/image";

export default function Gallery({ images }: { images: StaticImageData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full h-52">
      {images.map((photo, index) => (
        <Image
          fill
          key={index}
          src={photo.src}
          alt={"Photo " + index}
          className="rounded-lg shadow aspect-video"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      ))}
    </div>
  );
}
