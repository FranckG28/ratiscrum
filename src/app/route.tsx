import { contentList } from "@/content/content-list";
import { redirect } from "next/navigation";

export default function GET(req: Request) {
  return redirect(`/${contentList[0].slug}`);
}
