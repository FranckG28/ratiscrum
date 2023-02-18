export const emoji: string[] = ["🥇", "🥈", "🥉"];

export default function Price({ rank, title, description }: PriceProps) {
  return (
    <div className="flex gap-2 items-center px-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700/50 border border-slate-400/20">
        <p className="text-white text-xl font-medium">{emoji[rank - 1]}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-lg font-medium">{title}</p>
        {description && <p className="text-slate-400 text-sm">{description}</p>}
      </div>
    </div>
  );
}

export interface PriceProps {
  rank: 1 | 2 | 3;
  title: string;
  description?: string;
}
