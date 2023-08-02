import { Recepies } from "@/types/recepies"
import { getRecepie } from '@/api/Recepies/calls'

import HeroSection from './components/HeroSection/HeroSection'
import SecondSection from './components/SecondSection/SecondSection'

export default async function Home() {
  const data: Promise<Recepies> = getRecepie('vegan')
  const featuredRecepies = await data

  const first3Recepies = featuredRecepies.hits.slice(0, 3)
  const nextRecepies = featuredRecepies.hits.slice(4, 9)

  return (
    <main className="main">
      <HeroSection data={first3Recepies} />
      <SecondSection data={nextRecepies} />
    </main>
  )
}
