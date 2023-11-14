import { Manrope } from 'next/font/google'
import '../styles/globals.scss'
import Header from '@/components/Header/Navbar'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
    title: 'Audiophile',
    description: 'Audiophile e-commerce website'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={manrope.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
