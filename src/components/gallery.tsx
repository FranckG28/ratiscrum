import GalleryImage from "./gallery-image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {images.map((photo, index) => (
        <GalleryImage key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
}
