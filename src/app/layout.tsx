import Sidebar from "@/app/sidebar";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next/types";
import { appName, appUrl, description } from "./manifest";
import getSortedEventPreviews from "./actions/getSortedEventPreviews";
import { Analytics } from "@vercel/analytics/react";

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
  const previews = await getSortedEventPreviews();

  return (
    <html
      lang="fr"
      className={`h-full ${font.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head />
      <body className="bg-slate-100 dark:bg-slate-900 transition-colors flex w-screen overflow-x-hidden min-h-screen">
        <Sidebar events={previews} />

        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-6xl py-8 px-8 max-lg:pt-20">
            {children}
          </div>

          <footer className="py-3 border-t border-slate-500/20">
            <p className="text-center text-slate-500 text-sm">
              © Ratiscrum 🐀 - {new Date().getFullYear()}
            </p>
          </footer>

          <Analytics />
        </main>
      </body>
    </html>
  );
}
