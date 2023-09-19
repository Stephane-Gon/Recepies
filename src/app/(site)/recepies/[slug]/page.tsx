import List from "../components/List/List"
import { Recepies } from "@/types/recepies"
import { getRecepie } from '@/calls/recepies/getAll'

export default async function Recepies({params}: any) {
  let data: Promise<Recepies>
  let featuredRecepies: Recepies | null = null

  if(params.slug) {
    data = getRecepie(params.slug)
    featuredRecepies = await data
  }

  return (
    <main className="main">
      <List data={featuredRecepies} />
    </main>
  )
}
