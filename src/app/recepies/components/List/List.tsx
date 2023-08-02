'use client'
import React from 'react'

import styles from './styles.module.css'
import SearchInput from "@/design-system/atoms/SearchInput/SearchInput"


const List = () => {

  const handleChange = () => {
    console.log('Searching')
  }

  return (
    <div className={styles.wrapper}>
      <SearchInput 
        label="Search for a recepie:"
        id="searchInput-recepies"
        onChange={handleChange}
      />
    </div>
  )
}

export default List