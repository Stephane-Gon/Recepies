'use client'

import React from 'react'
//ICONS
import Calories from '@/design-system/icons/Calories';
import Co2Emissions from '@/design-system/icons/Co2Emissions';
import Time from '@/design-system/icons/Time';
import CusineType from '@/design-system/icons/CusineType';
//COMPONENTS
import { MainCard } from '@/design-system/molecules/MainCard';
import Item from '@/design-system/atoms/Item/Item';
// TYPES
import { Recipe } from "@/types/recepies";

interface HeroSectionProps {
  recipe: Recipe | null
}

const HeroSection =  ({ recipe }: HeroSectionProps) => {
  
  return (
    <div>
      <MainCard.Root>
        <MainCard.LeftContent>
          {
            recipe?.calories && (
              <MainCard.Item>
                <Item label='Calories' value={recipe?.calories.toFixed(2)} icon={Calories} />
              </MainCard.Item>
            )
          }
          {
            recipe?.co2EmissionsClass && (
              <MainCard.Item>
                <Item label='CO2 Emissions' value={recipe?.co2EmissionsClass} icon={Co2Emissions} />
              </MainCard.Item>
            )
          }
          {
            recipe?.totalTime && recipe?.totalTime > 0  && (
              <MainCard.Item>
                <Item label='Total time' value={recipe?.totalTime} icon={Time} />
              </MainCard.Item>
            )
          }
          {
            recipe?.cuisineType && recipe?.cuisineType.length && (
              <MainCard.Item>
                <Item label='Cusine type' value={recipe?.cuisineType[0]} icon={CusineType} />
              </MainCard.Item>
            )
          }
        </MainCard.LeftContent>
        {
          recipe?.images.LARGE?.url ? (
            <MainCard.Image link={recipe?.images.LARGE.url} label={recipe?.label} />
          ) : recipe?.images.REGULAR?.url ? (
            <MainCard.Image link={recipe?.images.REGULAR.url} label={recipe?.label} />
          ) : (
            <MainCard.Image link={recipe?.image as string} label={recipe?.label as string} />
          )
        }
        <MainCard.RightContent
          title={recipe?.label as string}
          mealType={recipe?.mealType as string[]}
          hasButton={false}
        />
      </MainCard.Root>
    </div>
  )
}

export default HeroSection