import Button from "@/components/button";
import Ratilogo from "@/components/ratiscrum-logo";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      <Ratilogo />

      <p className="dark:text-slate-300 text-slate-800">
        Le petit rat vert n&apos;a pas trouvé la page que vous cherchiez ...{" "}
      </p>

      <div className="hidden">
        <audio autoPlay>
          <source src={"RAT_VERT.mp3"} type="audio/mp3" />
        </audio>
      </div>

      <Button href="/" style="primary">
        Retour à l&apos;accueil
      </Button>
    </div>
  );
}
