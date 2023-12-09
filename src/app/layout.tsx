import Sidebar from "@/app/sidebar";
import "./globals.css";
import Providers from "@/components/providers";
import localFont from "next/font/local";
import { getAllSlugs } from "./actions/getAllSlugs";
import getEventPreview from "./actions/getEventPreview";

const font = localFont({
  src: "../../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slugs = await getAllSlugs();

  if (!slugs) {
    throw new Error("No slugs found");
  }

  const eventPreviews = await Promise.all(
    slugs.map((slug) => getEventPreview(slug))
  );

  return (
    <html
      lang="fr"
      className={`h-full ${font.variable} antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="bg-slate-100 dark:bg-slate-900 flex w-screen overflow-x-hidden min-h-screen">
        <Providers>
          <Sidebar
            events={eventPreviews
              .map(({ event }) => event)
              .sort((e1, e2) => {
                return e2.date.getTime() - e1.date.getTime();
              })}
          />

          <main className="flex-1 overflow-x-hidden">
            <div className="mx-auto max-w-6xl py-8 px-8 max-lg:pt-20">
              {children}
            </div>

            <footer className="py-3 border-t border-slate-500/20">
              <p className="text-center text-slate-500 text-sm">
                © Ratiscrum 🐀 - {new Date().getFullYear()}
              </p>
            </footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
