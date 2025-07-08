import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import PrioritySOSButton from "@/components/PrioritySOSButton"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "BloodConnect - Emergency Blood Donor Network",
  description: "Life-saving blood donor platform with 1-click emergency access and real-time donor tracking",
  keywords: "blood donor, emergency blood, blood bank, donate blood, blood donation, life saving, urgent blood",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <div className="max-w-md mx-auto lg:max-w-none bg-white dark:bg-slate-900 min-h-screen shadow-xl lg:shadow-none">
          {children}
        </div>
        <PrioritySOSButton />
      </body>
    </html>
  )
}
