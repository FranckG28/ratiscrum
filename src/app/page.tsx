import Button from "@/components/button";
import Reward from "@/components/reward";
import ImageSlider from "@/components/image-slider";
import { ExternalLink, Medal, Link as LinkIcon, Code2 } from "lucide-react";
import Gallery from "@/components/gallery";
import MemberComponent from "@/components/member";
import YouTube from "@/components/youtube";

const members = Array(8).fill({
  name: "Romain",
  role: "Chef de projet",
  avatar: "https://via.placeholder.com/75",
  links: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/romain-roux-1b1b4b1b1/",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/romainroux",
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCZ2X2Z2X2Z2X2Z2X2Z2X2Z2",
    },
  ],
});

const pictures = Array(6).fill({
  src: "https://via.placeholder.com/300",
  name: "Lorem ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
});

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <YouTube videoId="W8-KJPoo4uw" />

      <section className="flex flex-col">
        <p className="text-slate-800 dark:text-slate-300">14 décembre 2022</p>
        <h1 className="text-5xl text-slate-800 dark:text-white font-semibold tracking-tighter">
          Nuit de l&apos;info 2022
        </h1>
        <div className="flex items-center gap-4 py-3">
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
        <p className="text-slate-800 dark:text-slate-300 flex gap-2 font-medium items-center">
          <Medal size={20} />
          Résultats
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Reward
            rank={1}
            title="VEGA CS GROUP 2022"
            description="1500€"
            url="/"
          ></Reward>
          <Reward
            rank={2}
            title="VEGA CS GROUP 2022"
            description="1500€"
            url="/"
          ></Reward>
          <Reward
            rank={3}
            title="VEGA CS GROUP 2022"
            description="1500€"
            url="/"
          ></Reward>
        </div>
      </section>

      <section className="">
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-medium py-2 tracking-tight">
          Notre projet
        </h3>
        <div className="flex max-lg:flex-col gap-4">
          <div className="lg:w-2/3 gap-y-4 flex flex-col">
            <div>
              <p className="text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dignissimos molestias dolore unde! Vero voluptatem culpa
                eligendi iusto voluptas sint temporibus consequatur alias
                veritatis ipsum, odio praesentium, amet aspernatur deserunt?
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
              <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 tracking-tight">
                Technologies utilisés
              </h4>
              <p className="text-slate-600 dark:text-slate-400">React, Sequelite, TailwindCSS</p>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3">
            <ImageSlider />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-medium py-2 tracking-tight">
          L&apos;équipe
        </h3>
        <div className="grid grid-cols-2md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 my-4">
          {members.map((member, index) => (
            <MemberComponent key={index} {...member} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-medium py-2 tracking-tight">
          Album photo
        </h3>
        <Gallery photos={pictures} />
      </section>
    </div>
  );
}
