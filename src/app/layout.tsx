import Sidebar from "@/app/sidebar";
import "./globals.css";
import Providers from "@/components/providers";
import localFont from "next/font/local";
import { getAllSlugs } from "./actions/getAllSlugs";
import getEventPreview from "./actions/getEventPreview";
import { Metadata } from "next/types";
import { appName, appUrl, description } from "./manifest";

const font = localFont({
  src: "../../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: appName,
  metadataBase: new URL(appUrl),
  description: description,
  authors: {
    name: appName,
    url: appUrl,
  },
  openGraph: {
    title: appName,
    description: description,
    url: appUrl,
    siteName: appName,
    images: [
      {
        url: `/og.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: `/favicon-512.png`,
    shortcut: `/favicon192.png`,
    apple: `/favicon-512.png`,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: `/favicon-512.png`,
    },
  },
  manifest: "manifest.json",
};

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
