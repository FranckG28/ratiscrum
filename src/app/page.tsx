import Button from "@/components/button";
import Price from "@/components/price";
import { ExternalLink } from 'lucide-react';
import { Medal } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-5">
      <h1 className="text-white">vidéo ;)</h1>

      <div className="flex flex-col">
        <p className="text-slate-300">14 décembre 2022</p>
        <h1 className="text-4xl text-white font-medium">Nuit de l&apos;info 2022</h1>
        <div className="flex items-center gap-2 py-3">
          <Button style="primary" href="/">
            Visiter
            <ExternalLink size={22} /></Button>
          <Button style="flat" href="/">
            Site officiel
          </Button>
        </div>

      </div>

      <div className="flex rounded-lg flex-col border border-slate-300/40 gap-3 p-5">
        <p className="text-slate-300 flex gap-2 font-medium"><Medal />Résultats</p>
        <div className="grid grid-cols-3 gap-2 gap-y-4">
          <Price
            rank={1}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
          <Price
            rank={2}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
          <Price
            rank={3}
            title="VEGA CS GROUP 2022"
            description="1500€"
          ></Price>
        </div>
      </div>

    </div>
  );
}
