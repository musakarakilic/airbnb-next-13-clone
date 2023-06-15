import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/ClientOnly"
import Modal from "./components/modals/Modal"

export const metadata = {
  title: 'Airbnb Yachting',
  description: 'Yachting website to explore more in sea',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal onClose={() => {}} onSubmit={() => {}} actionLabel="Submit" title="Login Form" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
