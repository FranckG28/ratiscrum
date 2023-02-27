import { contentList } from "@/content/content-list";
import { redirect } from "next/navigation";

export default function HomePage() {

  return redirect(`/${contentList[0].slug}`)

}