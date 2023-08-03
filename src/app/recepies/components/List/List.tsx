'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import { Recepies, Hit } from "@/types/recepies"
import styles from './styles.module.css'
import SearchInput from "@/design-system/atoms/SearchInput/SearchInput"
import { GridSection } from '@/design-system/organisms/GridSection';

interface InitialProps {
  data?: Recepies | undefined | null
}

const List = ({ data }: InitialProps) => {
  console.log("🚀 ~ file: List.tsx:15 ~ List ~ props:", data?.hits)
  const router = useRouter();

  
  return (
    <div className={styles.wrapper}>
      <SearchInput 
        label="Search for a recepie:"
        id="searchInput-recepies"
        onChange={(value: string) => router.push(`/recepies/${value}`)}
      />
      <GridSection.Root>
        {
          data && (
            data?.hits.length ? (
              <>
                <GridSection.Title title='Searched recepies:' />
                <GridSection.Grid>
                  {
                    data.hits.map((item: Hit, idx) => (
                      <GridSection.Item 
                        key={`resultItem-${idx}-${item.recipe.label}`}
                        item={item.recipe}
                      />
                    ))
                  }
                </GridSection.Grid>
              </>
            ) : (
              <GridSection.Title title='No recepies found' />
            )
          )
        }
      </GridSection.Root>
    </div>
  )
}

export default List