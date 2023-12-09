import { redirect } from "next/navigation";
import { getAllSlugs } from "./actions/getAllSlugs";

export async function GET(req: Request) {
  const slugs = await getAllSlugs();

  if (!slugs) {
    throw new Error("No events found");
  }

  return redirect(`/${slugs[0]}`);
}
