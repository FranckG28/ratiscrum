import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
      {images.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt={"Photo " + index}
          className="rounded-lg shadow aspect-video object-cover"
          width={500}
          height={500}
        />
      ))}
    </div>
  );
}
