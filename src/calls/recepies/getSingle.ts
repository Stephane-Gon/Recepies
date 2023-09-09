import { Hit } from "@/types/recepies"

export const getRecipeByID = async (id: string): Promise<Hit> => {

  const response = await fetch(`http://localhost:3000/api/recepies/single/${id}`, {
    cache: 'no-store'
  })

  const data = await response.json()
  return data
}