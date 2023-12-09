import Sidebar from "@/app/sidebar";
import "./globals.css";
import localFont from "@next/font/local";
import Providers from "@/components/providers";

const font = localFont({
  src: "../../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`h-full ${font.variable} antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="bg-slate-100 dark:bg-slate-900 flex w-screen overflow-x-hidden min-h-screen">
        <Providers>
          <Sidebar />

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
