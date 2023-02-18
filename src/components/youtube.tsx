export default function YouTube({ videoId }: { videoId: string }) {
    return <div className="w-full aspect-video overflow-hidden rounded-lg shadow-xl">
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{ height: "100%", width: "100%" }}
        />
    </div>
}