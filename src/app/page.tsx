import Button from "@/components/button";
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col gap-2 py-5'>
      <h1 className="text-white">vidéo ;)</h1>

      <div className="flex flex-col">
        <p className="text-slate-300">14 décembre 2022</p>
        <h1 className="text-4xl text-white font-medium">Nuit de l&apos;info 2022</h1>
        <div className="flex items-center gap-2 py-3">
          <Button style="primary" href="/">Visiter <ExternalLink size={22} /></Button>
          <Button style="flat" href="/">Site officiel</Button>
        </div>
      </div>

    </div>
  )
}
