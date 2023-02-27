import { Loader2 } from "lucide-react";

export default function HomeLoading() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Loader2 className="h-16 w-16 animate-spin text-slate-500 dark:text-slate-400 m-auto" />
        </div>
    )

}