import { contentList } from "@/content/content-list";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  return redirect(`/${contentList[0].slug}`);
}
