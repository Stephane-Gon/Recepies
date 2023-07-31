'use client'
import React, { useState } from 'react'
import Slider from "react-slick";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.css'

//COMPONENTS
import { MainCard } from '@/design-system/molecules/MainCard';
import Item from '@/design-system/atoms/Item/Item';

//TYPES
import { Hit } from "@/types/recepies"

//ICONS
import Calories from '@/design-system/icons/Calories';
import Co2Emissions from '@/design-system/icons/Co2Emissions';
import Time from '@/design-system/icons/Time';
import CusineType from '@/design-system/icons/CusineType';


interface SecondSectionProps {
  data: Hit[]
}

const SecondSection = ({ data }: SecondSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const testSettings = {
    backgroundColor: '#feb028',
    height: '5px'
  }

  let sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.sliderDots,
    arrows: false,
    beforeChange: (__: any , next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => {
      return (
        <div>
          <ul className={styles.sliderDots}>
            {dots.map((item: any, index: number) => {
              return (
                <li key={index}>{item.props.children}</li>
              );
            })}
          </ul>
        </div>
      )
    },
    customPaging: (index: number) => {
      return (
        <button style={index === currentSlide ? testSettings : undefined}>
          {index + 1}
        </button>
      )
    }
  };

  console.log(data)

  return (
    <div className='wrapper'>
      <Slider {...sliderSettings}>
        {
          data.map((recepie, idx) => {
            return (
              <MainCard.Root key={`secondSection-card-${idx}`}>
                <MainCard.LeftContent>
                  {
                    recepie.recipe.calories && (
                      <MainCard.Item>
                        <Item label='Calories' value={recepie.recipe.calories.toFixed(2)} icon={Calories} />
                      </MainCard.Item>
                    )
                  }
                  {
                    recepie.recipe.co2EmissionsClass && (
                      <MainCard.Item>
                        <Item label='CO2 Emissions' value={recepie.recipe.co2EmissionsClass} icon={Co2Emissions} />
                      </MainCard.Item>
                    )
                  }
                  {
                    recepie.recipe.totalTime && recepie.recipe.totalTime > 0  && (
                      <MainCard.Item>
                        <Item label='Total time' value={recepie.recipe.totalTime} icon={Time} />
                      </MainCard.Item>
                    )
                  }
                  {
                    recepie.recipe.cuisineType && recepie.recipe.cuisineType.length && (
                      <MainCard.Item>
                        <Item label='Cusine type' value={recepie.recipe.cuisineType[0]} icon={CusineType} />
                      </MainCard.Item>
                    )
                  }
                </MainCard.LeftContent>
                {
                  recepie.recipe.images.LARGE?.url ? (
                    <MainCard.Image link={recepie.recipe.images.LARGE.url} label={recepie.recipe.label} />
                  ) : recepie.recipe.images.REGULAR?.url ? (
                    <MainCard.Image link={recepie.recipe.images.REGULAR.url} label={recepie.recipe.label} />
                  ) : (
                    <MainCard.Image link={recepie.recipe.image} label={recepie.recipe.label} />
                  )
                }
                <MainCard.RightContent
                  title={recepie.recipe.label}
                  mealType={recepie.recipe.mealType}
                />
              </MainCard.Root>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default SecondSection