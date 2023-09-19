'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import { Recepies, Hit } from "@/types/recepies"
import styles from './styles.module.css'
import SearchInput from "@/design-system/atoms/SearchInput/SearchInput"
import { GridSection } from '@/design-system/organisms/GridSection';

interface InitialProps {
  data?: Recepies | undefined | null;
  isLoading?: boolean
}

const List = ({ data, isLoading }: InitialProps) => {
  const router = useRouter();
  
  return (
    <div className={styles.wrapper}>
      <SearchInput 
        label="Search for a recepie:"
        id="searchInput-recepies"
        onChange={(value: string) => router.push(`/recepies/${value}`)}
      />
      <GridSection.Root>
        <GridSection.Title title='Searched recepies:' />
        <GridSection.Grid>
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
          <GridSection.ItemLoader />
        </GridSection.Grid>
      </GridSection.Root>
    </div>
  )
}

export default List