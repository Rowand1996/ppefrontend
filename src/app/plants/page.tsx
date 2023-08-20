import { Inter } from "next/font/google"
import LoginForm from "../../components/LoginForm"

const inter = Inter({ subsets: ["latin"] })



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1c2238] text-[#4ac0e1]">
      
    </main>
  )
}

async function getPlantsData() {
  const res = await fetch('');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

//2 http://localhost:3000/
