import React from 'react'

interface GridSectionTitleProps {
  title: string
}

const GridSectionTitle = (props: GridSectionTitleProps) => {
  return (
    <h1>{ props.title }</h1>
  )
}

export default GridSectionTitle