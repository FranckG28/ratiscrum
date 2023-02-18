export default function Badge({ text }: { text: string }) {
    return (
        <div className="flex gap-2 items-center bg-indigo-500/30 rounded-full px-3 py-0.5 w-fit">
            <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
            <p className="text-slate-300 text-sm">{text}</p>
        </div>
    )
}