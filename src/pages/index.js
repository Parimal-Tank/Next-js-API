import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      Hello {process.env.NEXT_PUBLIC_ANALYTICS_ID}
    </>
  )
}
