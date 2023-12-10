import Button from "@/components/button";
import Content from "@/components/content";
import Gallery from "@/components/gallery";
import ImageSlider from "@/components/image-slider";
import MemberComponent from "@/components/member";
import RewardComponent from "@/components/reward";
import YouTube from "@/components/youtube";
import { Event } from "@/models/event";
import { ExternalLink, Medal, LinkIcon, Code2 } from "lucide-react";
import { capitalize, displayDate, prettifyUrl } from "../utils";

export default function EventPage({
  article,
  mdx,
}: {
  article: Event;
  mdx: any;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      {article.videoId && <YouTube videoId={article.videoId} />}

      <section className="flex max-xl:flex-col lg:justify-between my-1">
        <div className="max-lg:flex max-lg:flex-col max-lg:gap-3">
          <h1 className="text-5xl text-slate-800 dark:text-white font-semibold tracking-tighter lg:leading-snug">
            {article.name}
          </h1>
          <p className="text-slate-800 dark:text-slate-300 inline-flex gap-4 max-lg:leading-5">
            {capitalize(displayDate(article.date))}, {article.location}
          </p>
        </div>
        <div className="flex items-center gap-4 py-3">
          {article.projectLink && (
            <Button style="primary" href={article.projectLink}>
              Visiter
              <ExternalLink size={22} />
            </Button>
          )}
          {article.eventLink && (
            <Button
              style="flat"
              href={article.eventLink}
              className="px-4 xl:order-first"
            >
              Site officiel
            </Button>
          )}
        </div>
      </section>

      {article.rewards?.length > 0 && (
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
              ></RewardComponent>
            ))}
          </div>
        </section>
      )}

      <section className="">
        <h3 className="text-xl text-slate-800 dark:text-slate-100 font-semibold py-2 tracking-tight">
          Notre projet
        </h3>
        <div className="flex max-xl:flex-col gap-8 xl:gap-16">
          <div className="xl:w-2/3 gap-8 flex flex-col">
            <div className="flex flex-col gap-4">
              <Content mdx={mdx} />

              <div className="flex gap-2 xl:gap-8 max-xl:flex-col">
                {article.projectLink && (
                  <Button style="flat" href={article.projectLink}>
                    <LinkIcon size={20} />
                    {prettifyUrl(article.projectLink)}
                  </Button>
                )}
                {article.sourceLink && (
                  <Button style="flat" href={article.sourceLink}>
                    <Code2 size={20} />
                    {prettifyUrl(article.sourceLink)}
                  </Button>
                )}
              </div>
            </div>

            {article.technologies.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                  Technologies utilisés
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {article.technologies}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col xl:w-1/2">
            {article.projectImages?.length > 0 && (
              <ImageSlider images={article.projectImages} />
            )}
          </div>
        </div>
      </section>

      {article.members?.length > 0 && (
        <section>
          <h3 className="text-xl text-slate-800 dark:text-slate-100 font-semibold py-2 tracking-tight">
            L&apos;équipe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 my-4">
            {article.members.map((member, index) => (
              <MemberComponent key={index} {...member} />
            ))}
          </div>
        </section>
      )}

      {article.galleryImages?.length > 0 && (
        <section className="flex flex-col gap-2">
          <h3 className="text-xl text-slate-800 dark:text-slate-100 font-semibold py-2 tracking-tight">
            Album photo
          </h3>
          <Gallery images={article.galleryImages} />
        </section>
      )}
    </div>
  );
}
