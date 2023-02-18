import Link from "next/link";

export const emoji: string[] = ["🥇", "🥈", "🥉"];

export default function Reward({ rank, title, description, url }: RewardProps) {
  return (
    <Link href={url} className="flex gap-2 items-center p-3 transition hover:bg-slate-700/40 duration-75 rounded-xl">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700/50 border border-slate-400/20">
        <p className="text-white text-xl font-medium">{emoji[rank - 1]}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-lg font-medium">{title}</p>
        {description && <p className="text-slate-400 text-sm">{description}</p>}
      </div>
    </Link>
  );
}

export interface RewardProps {
  rank: 1 | 2 | 3;
  title: string;
  description?: string;
  url: string;
}
