import Button from "@/components/button";
import Member from "@/components/member";
import Price from "@/components/price";
import Image from "next/image";
import RatiscrumLogo from "/public/rts-logo.png";
import { ExternalLink, Medal, Link as LinkIcon, Code2 } from "lucide-react";

const members = Array(8).fill({
  name: "Romain",
  role: "Chef de projet",
  avatar: "https://via.placeholder.com/75",
  links: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/romain-roux-1b1b4b1b1/"
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/romainroux"
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCZ2X2Z2X2Z2X2Z2X2Z2X2Z2"
    }
  ]
});

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-white">vidéo ;)</h1>

      <section className="flex flex-col">
        <p className="text-slate-300">14 décembre 2022</p>
        <h1 className="text-5xl text-white font-semibold tracking-tighter">
          Nuit de l&apos;info 2022
        </h1>
        <div className="flex items-center gap-2 py-3">
          <Button style="primary" href="/">
            Visiter
            <ExternalLink size={22} />
          </Button>
          <Button style="flat" href="/" className="px-4">
            Site officiel
          </Button>
        </div>
      </section>

      <section className="flex rounded-lg flex-col border border-slate-500/50 gap-3 p-5">
        <p className="text-slate-300 flex gap-2 font-medium items-center">
          <Medal size={20} />
          Résultats
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-4">
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
      </section>

      <section className="">
        <h3 className="text-xl text-slate-100 font-medium py-2 tracking-tight">Notre projet</h3>
        <div className="flex max-lg:flex-col gap-4">
          <div className="lg:w-2/3 gap-y-4 flex flex-col">
            <div>
              <p className="text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dignissimos molestias dolore unde! Vero voluptatem culpa eligendi
                iusto voluptas sint temporibus consequatur alias veritatis ipsum,
                odio praesentium, amet aspernatur deserunt?
              </p>
            </div>

            <div className="flex gap-8">
              <Button style="flat" href="/">
                <LinkIcon size={20} />
                Ratiscrum.fr
              </Button>
              <Button style="flat" href="/">
                <Code2 size={20} />
                Ratiscrum.fr
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-200 tracking-tight">Technologies utilisés</h4>
              <p className="text-slate-400">React, Sequelite, TailwindCSS</p>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3">
            <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
          </div>
        </div>

      </section>

      <section>
        <h3 className="text-xl text-slate-100 font-medium py-2 tracking-tight">L&apos;équipe</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 my-4">
          {members.map((member, index) => (
            <Member key={index} {...member} />))}
        </div>
      </section>

    </div>
  );
}
