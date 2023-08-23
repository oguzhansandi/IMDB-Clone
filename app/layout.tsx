import Header from './components/Header'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'IMDB Clone',
  description: 'Generated by create Oguzhan Sandi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/*Header*/}
        <Header/>
        {/*Navbar*/}
        {/*SearchBox*/}
      

        {children}
        </body>
    </html> 
  )
}
