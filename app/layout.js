import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Amy Chu',
  description: "Amy's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
