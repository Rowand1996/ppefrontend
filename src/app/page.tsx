import Image from "next/image"
import { Inter } from "next/font/google"
import LoginForm from "../components/LoginForm"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1c2238] text-[#4ac0e1]">
      <LoginForm />
    </main>
  )
}

//2 http://localhost:3000/
