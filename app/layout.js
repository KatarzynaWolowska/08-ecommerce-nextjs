import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Audiophile',
    description: 'Audiophile e-commerce website'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
