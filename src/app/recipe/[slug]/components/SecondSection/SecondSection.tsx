'use client'

import React from 'react'
// TYPES
import { Recipe } from "@/types/recepies";
// STYLES
import styles from './styles.module.css'

interface HeroSectionProps {
  recipe: Recipe | null
}

const SecondSection =  ({ recipe }: HeroSectionProps) => {
  
  return (
    <div className={styles.wrapper}>
      {
        recipe?.healthLabels.length && (
          <div className={styles.section}>
            <h1>Health Labels:</h1>
            <div className={styles.labelsBox}>
              {
                recipe?.healthLabels.map((item, idx) => (
                  <span className={styles.normalLabel} key={`health-label-${item}-${idx}`}>{item} </span>
                ))
              }
            </div>
          </div>
        )
      }

      {
        recipe?.cuisineType.length && (
          <div className={styles.section}>
            <h1>Cousine type:</h1>
            <div className={styles.labelsBox}>
              {
                recipe?.cuisineType.map((item, idx) => (
                  <span className={styles.normalLabel} key={`cousine-label-${item}-${idx}`}>{item} </span>
                ))
              }
            </div>
          </div>
        )
      }

      {
        recipe?.cautions.length && (
          <div className={styles.section}>
            <h1>Cautions:</h1>
            <div className={styles.labelsBox}>
              {
                recipe?.cautions.map((item, idx) => (
                  <span className={styles.cautionLabel} key={`caution-label-${item}-${idx}`}>{item} </span>
                ))
              }
            </div>
          </div>
        )
      }

      {
        recipe?.ingredients.length && (
          <div className={styles.section}>
            <h1>Ingredients:</h1>
            <div className={styles.ingredientsBox}>
              {
                recipe?.ingredients.map((item, idx) => (
                  <h3 key={`ingredient-text-${item}-${idx}`}>{item.text} </h3>
                ))
              }
            </div>
          </div>
        )
      }

      <div className={styles.tableSection}>
        <h1>Details:</h1>
        <table className={styles.detailsTable}>
          <thead>
            <tr>
              <th>Calories</th>
              <th>Total CO2 Emissions</th>
              <th>CO2 Emissions Class</th>
              <th>Total Weight</th>
              <th>Total Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{recipe?.calories.toFixed(2)}</td>
              <td>{recipe?.totalCO2Emissions.toFixed(2)}</td>
              <td>{recipe?.co2EmissionsClass}</td>
              <td>{recipe?.totalWeight}</td>
              <td>{recipe?.totalTime}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {
        recipe?.digest.length && (
          <div className={styles.section}>
            <h1>Nutrients :</h1>
            <div className={styles.nutrientsBox}>
              {
                recipe?.digest.map((item, idx) => (
                  <span key={`nutrients-text-${item}-${idx}`} className={styles.nutrientItem}>
                    <h3>{ item.label }: </h3>
                    <p>{ item.total.toFixed(2) };</p>
                  </span>
                ))
              }
            </div>
          </div>
        )
      }

    </div>
  )
}

export default SecondSection