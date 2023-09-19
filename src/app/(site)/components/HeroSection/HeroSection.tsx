import { Hit } from "@/types/recepies"
import { Slider as MySlider } from '@/design-system/organisms/Slider'

import styles from './styles.module.css'

interface HeroSectionProps {
  data: Hit[]
}

const HeroSection = async ({ data }: HeroSectionProps) => {

  return (
    <div className={styles.wrapper}>
      <MySlider.Root>
          {
            data.slice(0, 3).map((recepie, idx) => {
              return (
                <MySlider.Card key={`featured-recepi-${idx}`}>
                  <MySlider.Img image={recepie.recipe.image} label={recepie.recipe.label} />
                  <MySlider.Content recepie={recepie.recipe} />
                </MySlider.Card>
              )
            })
          }
      </MySlider.Root>
    </div>
  )
}

export default HeroSection