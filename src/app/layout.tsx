import Sidebar from '@/components/sidebar'
import './globals.css'
import localFont from '@next/font/local';

const font = localFont({
  src: '../../public/fonts/Switzer-Variable.woff2',
  variable: '--font-switzer',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${font.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark bg-slate-900 flex h-full overflow-hidden">

        <Sidebar />

        <main className='flex-1 overflow-auto px-3'>
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>

      </body >
    </html >
  )
}
