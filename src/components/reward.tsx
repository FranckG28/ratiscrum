import { Reward } from "@/models/reward";

export const emoji: string[] = ["🥇", "🥈", "🥉"];

export default function RewardComponent({ rank, title, description }: Reward) {
  return (
    <div className="flex gap-2 items-center p-3 rounded-xl">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300/50 border border-slate-400/20 dark:bg-slate-700/50 aspect-square">
        <p className="text-slate-800 dark:text-white text-xl font-medium">
          {emoji[rank - 1]}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-slate-800 dark:text-white text-lg font-medium">
          {title}
        </p>
        {description && (
          <p className="text-slate-800 dark:text-slate-400 text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
