import { Photo } from "@/models/photo";
import Image from "next/image";

export default function Gallery({ photos }: { photos: Photo[] }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {photos.map((photo, index) => <Image width={300} height={175} key={index} src={photo.src} alt={photo.description} className="rounded-lg shadow aspect-video" style={{ objectFit: "cover", height: "100%", width: "100%" }} />)}
    </div>
}