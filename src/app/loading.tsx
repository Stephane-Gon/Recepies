import { MainCard } from "@/design-system/molecules/MainCard"
import { Slider } from "@/design-system/organisms/Slider"

const Loading = () => {
  
  return (
    <main className="main">
      <Slider.Root>
        <Slider.Loader />
      </Slider.Root>
     <MainCard.Root>
        <MainCard.Loading />
     </MainCard.Root>
    </main>
  )
}

export default Loading