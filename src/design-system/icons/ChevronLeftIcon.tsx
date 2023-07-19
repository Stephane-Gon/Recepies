/**
 * @file
 * Copyright (C) Ubiwhere LDA. All rights reserved.
 * The reproduction, transmission or use of this document or its contents is not
 * permitted without express written authorization. All rights, including rights
 * created by patent grant or registration of a utility model or design, are
 * reserved. Modifications made to this document are restricted to authorized
 * personnel only. Technical specifications and features are binding only when
 * specifically and expressly agreed upon in a written contract.
 */

import { SVGProps } from 'react'

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox={`0 0 ${props.width ?? 24} ${props.height ?? 24}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Chevron Left Icon | Animaris</title>
    <desc>Collapsible Section Button</desc>
    <path d='M15 7.41 13.59 6l-6 6 6 6L15 16.59 10.42 12 15 7.41Z' fill={props.fill ?? '#fff'} />
  </svg>
)
