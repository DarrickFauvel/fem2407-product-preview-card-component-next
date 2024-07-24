import type { Metadata } from "next"
import { Montserrat, Fraunces } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: "Frontend Mentor | Product preview card component",
  description:
    "This is a solution to for the Frontend Mentor challenge 'Product preview card component'",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body className="font-montserrat text-base">{children}</body>
    </html>
  )
}
