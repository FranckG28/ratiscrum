import Button from "@/components/button";
import RewardComponent from "@/components/reward";
import ImageSlider from "@/components/image-slider";
import { ExternalLink, Medal, Link as LinkIcon, Code2, MapPin } from "lucide-react";
import Gallery from "@/components/gallery";
import MemberComponent from "@/components/member";
import YouTube from "@/components/youtube";
import { Event } from "@/models/event";
import { contentList } from "@/content/content-list";
import { capitalize, displayDate } from "@/services/utils";

export default function Home({ params }: { params: { slug: string } }) {

  const article = contentList.find((article) => article.slug === params.slug) || contentList[0];

  return (
    <div className="flex flex-col gap-4">

      <YouTube videoId="W8-KJPoo4uw" />

      <section className="flex max-xl:flex-col lg:justify-between my-1">

        <div>
          <h1 className="text-5xl text-slate-800 dark:text-white font-semibold tracking-tighter leading-snug">
            {article.name}
          </h1>
          <p className="text-slate-800 dark:text-slate-300 inline-flex gap-4">
            {capitalize(displayDate(article.date))}, {article.location}
          </p>
        </div>
        <div className="flex items-center gap-4 py-3">
          <Button style="primary" href={article.projectLink}>
            Visiter
            <ExternalLink size={22} />
          </Button>
          <Button style="flat" href={article.eventLink} className="px-4 xl:order-first">
            Site officiel
          </Button>
        </div>
      </section>

      {article.rewards && (
        <section className="flex rounded-lg flex-col border border-slate-500/50 gap-3 p-5">
          <p className="text-slate-800 dark:text-slate-300 flex gap-2 font-medium items-center">
            <Medal size={20} />
            Résultats
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {article.rewards.map((reward, index) => (
              <RewardComponent
                key={index}
                rank={reward.rank}
                title={reward.title}
                description={reward.description}
                url={reward.url}
              ></RewardComponent>
            ))}
          </div>
        </section>
      )}

      <section className="">
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-medium py-2 tracking-tight">
          Notre projet
        </h3>
        <div className="flex max-lg:flex-col gap-4">
          <div className="lg:w-2/3 gap-y-4 flex flex-col">
            <div>
              <p className="text-slate-600 dark:text-slate-400">
                {article.description}
              </p>
            </div>

            <div className="flex gap-2 xl:gap-8 max-xl:flex-col">
              <Button style="flat" href={article.projectLink}>
                <LinkIcon size={20} />
                {article.projectLink}
              </Button>
              <Button style="flat" href={article.sourceLink}>
                <Code2 size={20} />
                {article.sourceLink}
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200 tracking-tight">
                Technologies utilisés
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {article.technologies.join(", ")}
              </p>
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
          {article.members.map((member, index) => (
            <MemberComponent key={index} {...member} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-medium py-2 tracking-tight">
          Album photo
        </h3>
        <Gallery photos={article.album} />
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return contentList.map((post) => ({
    slug: post.slug,
  }));
}