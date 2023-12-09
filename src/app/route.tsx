import { redirect } from "next/navigation";
import getSortedEventPreviews from "./actions/getSortedEventPreviews";

export async function GET(req: Request) {
  const eventsPreviews = await getSortedEventPreviews();

  if (!eventsPreviews || eventsPreviews.length === 0) {
    throw new Error("No events found");
  }

  return redirect(`/${eventsPreviews[0].slug}`);
}
